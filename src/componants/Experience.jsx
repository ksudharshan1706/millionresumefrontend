import axios from "axios";
import React, { useEffect, useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import ExperItem from "./ExperItem";
const Experience = () => {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const edu = await axios.get(
        "https://millionbackend.onrender.com/api/auth/experience"
      );
      setExperience(edu.data);
    };
    fetchdata();
  }, []);
  const [color, setColor] = useState("");
  console.log(color);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        backgroundColor: `${color}`,
        height: "60%",
        justifyContent: "center",
        borderRadius: "20px",
        // alignItems: "center",
      }}
      className="educationstyling"
    >
      <div style={{ display: "flex", gap: "10px", marginLeft: "15px" }}>
        <WorkIcon />
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>Experience:</div>
        <div>
          <input
            type="radio"
            value="Male"
            name="bgColor"
            onChange={(e) => setColor("lightgray")}
          />{" "}
          lightgrey
          <input
            type="radio"
            value="Female"
            name="bgColor"
            onChange={(e) => setColor("lightblue")}
          />{" "}
          lightblue
          <input
            type="radio"
            value="Other"
            name="bgColor"
            onChange={(e) => setColor("white")}
            defaultValue={true}
          />{" "}
          white
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {experience.map((data, index) => (
          <ExperItem data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
