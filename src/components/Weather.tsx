// import { AnyNsRecord } from "dns";
import React from "react";

const Weather = (props: any) => {
  if (props.city && props.day1 && props.degreeC) {
    return (
      <div>
        <p>Date: {props.date1}</p>
        <p>Temperature: {props.temp1C} ºC</p>
        <p>Pressure: {props.pressure1} mBar</p>
        <p>Wind speed: {props.windSpeed1} m/sec</p>
        <p>Weather condition: {props.weatherCondition1}</p>
      </div>
    );
  }

  if (props.city && props.day1 && props.degreeF) {
    return (
      <div>
        <p>Date: {props.date1}</p>
        <p>Temperature: {props.temp1F} ºF</p>
        <p>Pressure: {props.pressure1} mBar</p>
        <p>Wind speed: {props.windSpeed1} m/sec</p>
        <p>Weather condition: {props.weatherCondition1}</p>
      </div>
    );
  }

  if (props.city && props.day2 && props.degreeC) {
    return (
      <div>
        <p>Date: {props.date2}</p>
        <p>Temperature: {props.temp2C} ºC</p>
        <p>Pressure: {props.pressure2} mBar</p>
        <p>Wind speed: {props.windSpeed2} m/sec</p>
        <p>Weather condition: {props.weatherCondition2}</p>
      </div>
    );
  }

  if (props.city && props.day2 && props.degreeF) {
    return (
      <div>
        <p>Date: {props.date2}</p>
        <p>Temperature: {props.temp2F} ºF</p>
        <p>Pressure: {props.pressure2} mBar</p>
        <p>Wind speed: {props.windSpeed2} m/sec</p>
        <p>Weather condition: {props.weatherCondition2}</p>
      </div>
    );
  }

  if (props.city && props.day3 && props.degreeC) {
    return (
      <div>
        <p>Date: {props.date3}</p>
        <p>Temperature: {props.temp3C} ºC</p>
        <p>Pressure: {props.pressure3} mBar</p>
        <p>Wind speed: {props.windSpeed3} m/sec</p>
        <p>Weather condition: {props.weatherCondition3}</p>
      </div>
    );
  }

  if (props.city && props.day3 && props.degreeF) {
    return (
      <div>
        <p>Date: {props.date3}</p>
        <p>Temperature: {props.temp3F} ºF</p>
        <p>Pressure: {props.pressure3} mBar</p>
        <p>Wind speed: {props.windSpeed3} m/sec</p>
        <p>Weather condition: {props.weatherCondition3}</p>
      </div>
    );
  }

  return (
    <div>
      <p className="error">{props.error}</p>
    </div>
  );
};

export default Weather;
