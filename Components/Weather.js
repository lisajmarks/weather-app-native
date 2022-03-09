import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/APIKeys";

const Weather = () => {
  const [data, setData] = useState();

  const getWeather = () => {
    let lat = "37.773972";
    let lon = "-122.431297";

    //construct the API url to call
    const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/";
    let url =
      BASE_WEATHER_URL +
      `weather?lat=${lat}&units=imperial&lon=${lon}&appid=${API_KEY}`;

    const response = await fetch(url);
    const result = await response.json();

    //call the API and set state
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // };

  // useEffect(() => {
  //   getWeather();
  // }, []);

  return (
    <View>
      <Text>
        City: {data?.name} <br />
        Temprature: {data?.main.feels_like}
      </Text>
    </View>
  );
};
export default Weather;
