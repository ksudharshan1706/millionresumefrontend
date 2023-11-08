import React from "react";

const ExperItem = ({ data }) => {
  return (
    <div className="educationInfo">
      <div className="educInfo">
        <b>@ {data.project}</b>
        <div>{data.period}</div>
      </div>
      <div>{data.projectdesc}</div>
    </div>
  );
};

export default ExperItem;
