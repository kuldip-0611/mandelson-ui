import React from "react";
import { Col, Container, Row } from "reactstrap";
import data from "../data";
import CommonComponent from "./CommonComponent";
import asset5 from "../assets/images/Asset5.svg";
import asset6 from "../assets/images/Asset6.svg";
import asset7 from "../assets/images/Asset7.svg";
import asset8 from "../assets/images/Asset8.svg";

const ServiceComponent = () => {
  return (
    <div className="services-container mt-5" id="service">
      <img src={asset5} className="asset5" />
      <img src={asset6} className="asset6" />
      <img src={asset7} className="asset7" />
      <img src={asset8} className="asset8" />

      <Container>
        <div className="mt-5 services-text">
          <CommonComponent
            textAlign={"center"}
            flexDirection={"center"}
            height1={"7px"}
            height2={"2px"}
            width1={"60px"}
            width2={"170px"}
            text={"SERVICES"}
          />
        </div>
        {data.map((item, index) => {
          return (
            <Row className="mt-5">
              <Col
                key={item.index}
                className={`${item.order ? "order-1" : "order-2"} mt-5`}
              >
                <div>
                  <p
                    className={` ${
                      item.order ? "text-end" : "text-start"
                    }   service-text-head `}
                  >
                    {item.imgHeading}
                  </p>
                  <p
                    className={` ${
                      item.order ? "text-end" : "text-start"
                    }   service-text-content `}
                  >
                    {item.imgText}
                  </p>
                </div>
              </Col>
              <Col
                key={item.index}
                className={`${item.order ? "order-2" : "order-1"} `}
              >
                <img src={item.imgLink} className="services-img order-2 " />
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default ServiceComponent;
