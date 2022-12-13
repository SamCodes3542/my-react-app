import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showTemp(response) {
    alert(`The temperature in Paris is ${Math.round(response.data.main.temp)}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=5a281c704f6f1b324b8404bc0f462bee&units=metric`;
  axios.get(url).then(showTemp);

  return (
    <div className="Weather">
      <h1> Welcome to the World!</h1>
    </div>
  );
}
