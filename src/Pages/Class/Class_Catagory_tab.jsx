import React from "react";
import ClassCard from "./ClassCard";

const Class_Catagory_tab = ({ class_catagory }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {class_catagory.map((classData, index) => (
        <div
          key={classData._id}
          className="opacity-0 animate-fadeIn"
          style={{ animationDelay: `${index * 80}ms`, animationFillMode: "forwards" }}
        >
          <ClassCard approvedClass={classData} />
        </div>
      ))}
    </div>
  );
};

export default Class_Catagory_tab;
