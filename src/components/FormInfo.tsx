import React from "react";
import { Button, Form } from "react-bootstrap";

const FormInfo = (props: any) => (
  // <form onSubmit={props.weatherMethod}>
  //   <input type="text" name="city" placeholder="City" />

  //   <button>Get weather</button>
  // </form>
  <Form onSubmit={props.weatherMethod}>
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <Form.Control type="text" name="city" placeholder="City" />
        </div>
        <div className="col-sm-4">
          <Button variant="primary" type="submit" className="batt" >
            Get weather
          </Button>
        </div>
      </div>
    </div>
  </Form>
);

export default FormInfo;
