import React, { useEffect, useState } from "react";
import axios from "axios";
import EduItem from "./EduItem";
import SchoolIcon from "@mui/icons-material/School";
const Education = () => {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const edu = await axios.get(
        "https://millionbackend.onrender.com/api/auth/education"
      );
      setEducation(edu.data);
    };
    fetchdata();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        height: "30%",
        justifyContent: "center",
        flexDirection: "column",
        // border: "2px solid",
        borderRadius: "20px",
      }}
      className="educationstyling"
    >
      <div style={{ display: "flex", gap: "10px", marginLeft: "15px" }}>
        <SchoolIcon />
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>EDUCATION:</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {education.map((data, index) => (
          <EduItem data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Education;
