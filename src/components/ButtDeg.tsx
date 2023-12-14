import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const ButtDeg = (props: any) => (
  <DropdownButton title="ºC or ºF" id="button-degree">
            <Dropdown.Item
              eventKey="1"
              className="elem1"
              onClick={props.MethodDeg1}
            >
              ºC
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              className="elem2"
              onClick={props.MethodDeg2}
            >
              ºF
            </Dropdown.Item>
          </DropdownButton>
)







export default ButtDeg;