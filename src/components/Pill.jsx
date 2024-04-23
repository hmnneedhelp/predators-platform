import React from 'react'


const Pill = ({ isProf, prof, categories = "React", Profile }) => {
    return (
      <div
        className={`rounded-[14px] px-3 py-2 ${
          isProf ? "bg-neutral-500" : "bg-neutral-700"
        } ${Profile ? "bg-neutral-900" : null} `}
        style={{ border: "1px solid #404040" }}
      >
        {isProf ? prof : categories}
      </div>
    );
  };
  
export default Pill