import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { FiMinusCircle } from 'react-icons/fi';

const ItemList = (props) => {
  return (
        <Form.Row>
          <Form.Group as={Row}>
              <Col sm="10">
              <Form.Control plaintext readOnly defaultValue={props.item} name={props.item}/>
              </Col>
              <Col sm="2"><Button variant="outline-danger" onClick={() => props.removeHobbies(props.item)}><FiMinusCircle/></Button></Col>
          </Form.Group>
        </Form.Row>
  );
}

export default ItemList;
