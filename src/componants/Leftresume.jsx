import React from "react";
import { Sudharshan } from "../assets";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Leftresume = () => {
  const cardItems = [
    {
      imgsrc: FacebookIcon,
    },
    {
      imgsrc: TwitterIcon,
    },
    {
      imgsrc: GitHubIcon,
    },
    {
      imgsrc: LinkedInIcon,
    },
  ];
  return (
    <div className="leftResume">
      <img
        className="profileimg"
        src={Sudharshan}
        alt="sudharshan"
        style={{
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <div className="">
        <h2>Sudharshan Kamavaram</h2>
        <b>Full Stack Developer</b>
      </div>
      <div style={{ marginLeft: "3%" }}>
        Willing to pursue a challenging career and acquire new skills that would
        enlighten me in my profession as an individual, at the same time
        participate in the organization’s growth.
      </div>
      <div>Hyderabad,Telangana</div>
      <div style={{ display: "flex", gap: "20px" }}>
        {cardItems.map((data, i) => (
          <data.imgsrc />
        ))}
      </div>
    </div>
  );
};

export default Leftresume;
