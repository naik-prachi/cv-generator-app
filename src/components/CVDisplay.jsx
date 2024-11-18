import React from "react";
import "../App.css";
import profilePic from "../img/dummypic.png";

function CVDisplay({ personalInfo, education, experience, skills }) {
  return (
    <div className="cv-display">
      
        <div className="cv-border txt">
          <table>
            <tr>
              <td>
                <div className="cv-left-column">
                  <div className="cv-section">
                    <img
                      src={profilePic}
                      alt="dummy pic"
                      style={{
                        width: "150px",
                        height: "150px",
                        margin: "20px auto",
                        borderRadius: "75px",
                      }}
                    />
                    <h3> {personalInfo.fullName} </h3>
                    <p> {personalInfo.email} </p>
                    <p> {personalInfo.phone} </p>
                  </div>
                  <br />
                  <div className="cv-section">
                    <h5>Educational Info</h5>
                    <p> {education} </p>
                  </div>
                </div>
              </td>
              <td>
                <div className="cv-right-column">
                  <div style={{ height: "200px" }}></div>

                  <div className="cv-section">
                    <h5>Work Experience</h5>
                    <p> {experience} </p>
                  </div>

                  <div className="cv-section">
                    <h5>Skills</h5>

                    <p> {skills} </p>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      
    </div>
  );
}

export default CVDisplay;
