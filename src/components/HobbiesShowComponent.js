import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const HobbiesShowComponent = ({ hobbiesShow }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <ListGroup>
            {hobbiesShow.map((item) => {
              let itemEdit = item.toString().replace(/ +/g, "");
              let imageSrc = "./image/" + itemEdit + ".jpg";
              return (
                <ListGroup.Item className="text-center" key={item}>
                  <span className="showHobbies  showhobbies-item">{item}</span>
                  <span className="showHobbies  showhobbies-item">
                    <img src={imageSrc} alt="Logo" />
                  </span>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default HobbiesShowComponent;
