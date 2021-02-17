import React, { useReducer, useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ItemList from "./ItemList";
import hobbiesReducer from "../reducers/hobbies";
import HobbiesShowComponent from "./HobbiesShowComponent";

const HobbiesComponent = ({ dataHobbies }) => {
  //hobbies from select-option
  const [hobbies, dispatch] = useReducer(hobbiesReducer, dataHobbies);
  //hobies where remove items from select-options go
  const [addHobies, dispatchTwo] = useReducer(hobbiesReducer, []);
  //hobbies show on submit
  const [hobbiesShow, setHobbiesShow] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onsubmit = (e) => {
    let element = document.getElementById("results");
    e.preventDefault();
    setHobbiesShow(addHobies);
    reset();
  };

  //remove hobbies from select and add to queue
  const addHobbies = () => {
    let element = document.getElementById("inlineFormCustomSelect");
    const addElement = element.options[element.selectedIndex].value;
    dispatch({ type: "REMOVE_HOBBIES", payload: addElement });
    if (addElement !== "neutral") {
      dispatchTwo({ type: "ADD_HOBBIES", payload: addElement });
    }
  };

  //remove hobbies from queue and add to select drop-down
  const removeHobbies = (item) => {
    const removeElement = item;
    dispatchTwo({ type: "REMOVE_HOBBIES", payload: removeElement });
    dispatch({ type: "ADD_HOBBIES", payload: removeElement });
  };

  const reset = () => {
    dispatchTwo({ type: "RESET", payload: [] });
    dispatch({ type: "RESET", payload: dataHobbies });
  };

  useEffect(() => {
    const button = addHobies <= 0 ? true : false;
    setButtonDisabled(button);
  }, [addHobies]);

  return (
    <div>
      <Form onSubmit={onsubmit}>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
        >
          <option value="neutral">Choose...</option>
          {hobbies.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </Form.Control>
        <Row>
          <Col sm={4}>
            <Button
              variant="outline-primary"
              onClick={addHobbies}
              className="my-4"
            >
              Add hobbies
            </Button>
          </Col>
          <Col sm={4}>
            <Button
              disabled={buttonDisabled}
              variant="outline-primary"
              onClick={reset}
              className="my-4"
            >
              Reset all
            </Button>
          </Col>
          <Col sm={4}>
            <Button
              disabled={buttonDisabled}
              variant="outline-primary"
              onClick={onsubmit}
              className="my-4"
            >
              Submit
            </Button>
          </Col>
        </Row>
        {addHobies.map((item) => {
          return (
            <ItemList key={item} item={item} removeHobbies={removeHobbies} />
          );
        })}
      </Form>

      <div className="m-4">
        <h5>Your Hobbies Are:</h5>
        <HobbiesShowComponent hobbiesShow={hobbiesShow} />
      </div>
    </div>
  );
};

export default HobbiesComponent;
