import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/APIKeys";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  const getWeather = () => {
    let lat = "37.773972";
    let lon = "-122.431297";

    //construct the API url to call
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=imperial&lon=${lon}&appid=${API_KEY}`;

    //call the API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View>
      <Text>Weather</Text>
    </View>
  );
};

export default Weather;
