import React from "react";
import { Col, Container, Row } from "reactstrap";
import team from "../teamData";
import person1 from '../assets/images/Person1.svg';
import CommonComponent from "./CommonComponent";

const TeamComponent = () => {
  return (
    <div id="team">
      <Container>
      <div className="team-heading"><CommonComponent textAlign = {'center'} flexDirection={'center'} height1={'7px'} height2={'2px'} width1={'100px'} width2={'135px'} text={'OUR TEAM'} /></div>
        <Row>
          {team.map((item) => (
            <Col key={item.index} xl='4' lg='4' md='12'>
              <img src={item.img} alt="person1 img" className="team-img"/>
              <p className="team-name">{item.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamComponent;
