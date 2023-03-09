import React from "react";
import { Col, Container, Row } from "reactstrap";
import project1 from "../assets/images/project1.svg";
import project2 from "../assets/images/project2.svg";
import project3 from "../assets/images/project3.svg";
import CommonComponent from "./CommonComponent";

const ProjectComponent = () => {
  return (
    <div id="project">
      <Container>
        <div className="project-title">
          <CommonComponent
            textAlign={"center"}
            flexDirection={"center"}
            height1={"7px"}
            height2={"2px"}
            width1={"95px"}
            width2={"240px"}
            text={"OUR PROJECTS"}
          />
        </div>
        <Row>
          <Col>
            <div className="example">
              <img src={project1} className='project-1' alt="tree" />
              <div className="content">
                <div className="text">project1</div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="project2-3">
              <div className="example">
                <img
                  src={project2}
                  className='project-2'
                  
                  alt="tree"
                />
                <div className="content">
                  <div className="text">Project2</div>
                </div>
              </div>
              <div className="example">
                <img
                  src={project3}
                  className='project-3'
                  alt="tree"
                />
                <div className="content">
                  <div className="text">Project3</div>
                </div>
              </div>
             
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectComponent;
