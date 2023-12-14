import React from "react";
import Info from "./components/Info";
import FormInfo from "./components/FormInfo";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ButtDay from "./components/ButtDay";
import ButtDeg from "./components/ButtDeg";

const API_KEY = "fd25c18ed0637c9195f5e6d3d8ac48e0";

class App extends React.Component {
  state = {
    nameDay: undefined,
    nameDegree: undefined,
    day1: undefined,
    day2: undefined,
    day3: undefined,
    degreeC: undefined,
    degreeF: undefined,
    tempC: undefined,
    tempF: undefined,
    city: undefined,
    date: undefined,
    weatherCondition: undefined,
    pressure: undefined,
    windSpeed: undefined,
    temp2C: undefined,
    temp2F: undefined,
    date2: undefined,
    weatherCondition2: undefined,
    pressure2: undefined,
    windSpeed2: undefined,
    temp3C: undefined,
    temp3F: undefined,
    date3: undefined,
    weatherCondition3: undefined,
    pressure3: undefined,
    windSpeed3: undefined,
    error: undefined,
  };

  gettingWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const nameDay = this.state.nameDay;
    const nameDegree = this.state.nameDegree;

    if (city && nameDay && nameDegree) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      let temper = data.list[0].main.temp;
      this.setState({
        tempC: Math.round(data.list[0].main.temp),

        tempF: Math.round(1.8 * temper + 32),
        pressure: data.list[0].main.pressure,
        windSpeed: Math.round(data.list[0].wind.speed * 10) / 10,
        city: data.city.name,
        date: data.list[0].dt_txt,
        weatherCondition: data.list[0].weather[0].description,
        temp2C: Math.round(data.list[8].main.temp),
        temp2F: Math.round(1.8 * data.list[8].main.temp + 32),
        pressure2: data.list[8].main.pressure,
        windSpeed2: Math.round(data.list[8].wind.speed * 10) / 10,
        date2: data.list[8].dt_txt,
        weatherCondition2: data.list[8].weather[0].description,
        temp3C: Math.round(data.list[16].main.temp),
        temp3F: Math.round(1.8 * data.list[16].main.temp + 32),
        pressure3: data.list[16].main.pressure,
        windSpeed3: Math.round(data.list[16].wind.speed * 10) / 10,
        date3: data.list[16].dt_txt,
        weatherCondition3: data.list[16].weather[0].description,
        error: undefined,
      });
    } else {
      this.setState({
        error: "Enter the name of the city, Date and ºC or ºF",
      });
    }
  };

  handlerNameButtonDay1 = (event: any) => {
    event.preventDefault();
    const day = document.getElementById("button-day");
    if (!day) return;
    day.textContent = "today";
    this.setState({ day1: "today", nameDay: "today" });
  };

  handlerNameButtonDay2 = (event: any) => {
    event.preventDefault();
    const day = document.getElementById("button-day");
    if (!day) return;
    day.textContent = "tomorrow";
    this.setState({ day2: "tomorrow", nameDay: "tomorrow" });
  };

  handlerNameButtonDay3 = (event: any) => {
    event.preventDefault();
    const day = document.getElementById("button-day");
    if (!day) return;
    day.textContent = "day after tomorrow";
    this.setState({
      day3: "day after tomorrow",
      nameDay: "day after tomorrow",
    });
  };

  handlerNameButtonDegreeC = (event: any) => {
    event.preventDefault();
    const degree = document.getElementById("button-degree");
    if (!degree) return;
    degree.textContent = "ºC";
    this.setState({ degreeC: "ºC", nameDegree: "ºC" });
  };

  handlerNameButtonDegreeF = (event: any) => {
    event.preventDefault();
    const degree = document.getElementById("button-degree");
    if (!degree) return;
    degree.textContent = "ºF";
    this.setState({ degreeF: "ºF", nameDegree: "ºF" });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="main">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <FormInfo weatherMethod={this.gettingWeather} />
                <div className="row">
                  <div className="col-sm-4">
                    <ButtDay
                      MethodDay1={this.handlerNameButtonDay1}
                      MethodDay2={this.handlerNameButtonDay2}
                      MethodDay3={this.handlerNameButtonDay3}
                    />
                  </div>
                  <div className="col-sm-2">
                    <ButtDeg
                      MethodDeg1={this.handlerNameButtonDegreeC}
                      MethodDeg2={this.handlerNameButtonDegreeF}
                    />
                  </div>
                  <div className="col-sm-6">
                      <Weather
                        day1={this.state.day1}
                        day2={this.state.day2}
                        day3={this.state.day3}
                        degreeC={this.state.degreeC}
                        degreeF={this.state.degreeF}
                        temp1C={this.state.tempC}
                        temp1F={this.state.tempF}
                        pressure1={this.state.pressure}
                        windSpeed1={this.state.windSpeed}
                        city={this.state.city}
                        date1={this.state.date}
                        weatherCondition1={this.state.weatherCondition}
                        temp2C={this.state.temp2C}
                        temp2F={this.state.temp2F}
                        pressure2={this.state.pressure2}
                        windSpeed2={this.state.windSpeed2}
                        date2={this.state.date2}
                        weatherCondition2={this.state.weatherCondition2}
                        temp3C={this.state.temp3C}
                        temp3F={this.state.temp3F}
                        pressure3={this.state.pressure3}
                        windSpeed3={this.state.windSpeed3}
                        date3={this.state.date3}
                        weatherCondition3={this.state.weatherCondition3}
                        error={this.state.error}
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
