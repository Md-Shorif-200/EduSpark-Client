import React from "react";
import Loading from "../../Common/Loading";
import usePayments from "../../Hooks/usePayments";
import { HiOutlineUsers, HiOutlineClipboardList, HiOutlineCheckCircle } from "react-icons/hi";

const ClassProgress = ({ myClassDetails, totalAssignments, totalSubmissions }) => {
    const [payments, , isLoading] = usePayments();

    if (isLoading) return <Loading />;

    const totalEnrollments = payments.filter(
        (payment) => payment.paymentId === myClassDetails?._id
    );

    const stats = [
        {
            label: "Total Enrollment",
            value: totalEnrollments.length,
            icon: <HiOutlineUsers />,
            color: "text-indigo-600",
            bg: "bg-indigo-50",
        },
        {
            label: "Assignments",
            value: totalAssignments.length,
            icon: <HiOutlineClipboardList />,
            color: "text-amber-600",
            bg: "bg-amber-50",
        },
        {
            label: "Submissions",
            value: totalSubmissions,
            icon: <HiOutlineCheckCircle />,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 transition-transform hover:scale-[1.02]">
                    <div className={`${stat.bg} ${stat.color} text-3xl p-4 rounded-xl`}>
                        {stat.icon}
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
                        <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClassProgress;