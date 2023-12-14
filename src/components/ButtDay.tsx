import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const ButtDay = (props:any) => (
 
    <DropdownButton title="Date" id="button-day">
      <Dropdown.Item
        eventKey="1"
        className="elem1"
        onClick={props.MethodDay1}
      >
        today
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="2"
        className="elem2"
        onClick={props.MethodDay2}
      >
        tomorrow
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="3"
        className="elem3"
        onClick={props.MethodDay3}
      >
        day after tomorrow
      </Dropdown.Item>
    </DropdownButton>
);

export default ButtDay;
