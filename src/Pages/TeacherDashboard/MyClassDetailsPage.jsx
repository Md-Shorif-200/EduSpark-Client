import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClassProgress from './ClassProgress';
import AddAsignment from './AddAsignment';
import useAssignments from '../../Hooks/useAssignments';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useClass from '../../Hooks/useClass';

const MyClassDetailsPage = () => {
    const { id } = useParams();
    const [classes] = useClass();
    const myClassDetails = classes.find(data => data._id === id);
    
    const [assignments, refetch, isLoading] = useAssignments();
    const myAssignmets = assignments.filter(assignment => assignment.assignmentId === myClassDetails?._id);
    
    const axiosSecure = useAxiosSecure();
    const [submitedAssignments, setSubmitedAssignments] = useState([]);
    
    const filterdSubmissions = submitedAssignments.filter(submission => submission.submitedId === myClassDetails?._id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('/submit-asignment');
                setSubmitedAssignments(response.data);
                refetch();
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [myClassDetails?._id, axiosSecure, refetch]);

    return (
        <div className="min-h-screen bg-gray-50/50 ">
            {/* Header Section */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                        {myClassDetails?.title || "Class Management"}
                    </h1>
                    <p className="text-slate-500 mt-1">Monitor progress and manage assignments</p>
                </div>
                <AddAsignment myClassDetails={myClassDetails} refetch={refetch} />
            </div>

            <div className="space-y-10">
                {/* Progress Stats */}
                <section>
                    <ClassProgress 
                        myClassDetails={myClassDetails} 
                        totalAssignments={myAssignmets} 
                        totalSubmissions={filterdSubmissions.length} 
                    />
                </section>

                {/* Assignment Table */}
                <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="font-semibold text-slate-700">Assignment List</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr className="text-slate-500 uppercase text-xs tracking-wider">
                                    <th className="bg-transparent">#</th>
                                    <th className="bg-transparent">Title</th>
                                    <th className="bg-transparent">Deadline</th>
                                    <th className="bg-transparent">Description</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-600">
                                {myAssignmets.map((myAssignment, index) => (
                                    <tr key={myAssignment._id} className="hover:bg-indigo-50/30 transition-colors">
                                        <th className="font-medium">{index + 1}</th>
                                        <td className="font-semibold text-indigo-700">{myAssignment.title}</td>
                                        <td>
                                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                                                {myAssignment.dedline}
                                            </span>
                                        </td>
                                        <td className="max-w-xs truncate">{myAssignment.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {myAssignmets.length === 0 && (
                            <div className="text-center py-12 text-slate-400">
                                No assignments created yet.
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MyClassDetailsPage;