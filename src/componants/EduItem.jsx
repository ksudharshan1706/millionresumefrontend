import React from "react";

const EduItem = ({ data }) => {
  //   console.log(data);
  return (
    <div className="educationInfo">
      <div className="educInfo">
        <b>
          My {data.type} @ {data.school}
        </b>
        <div>{data.years}</div>
      </div>
      <div>{data.desc}</div>
    </div>
  );
};

export default EduItem;
