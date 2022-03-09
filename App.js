import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./Components/Weather";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  async function load() {
    const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/";
    let url =
      BASE_WEATHER_URL +
      `weather?lat=${lat}&units=imperial&lon=${lon}&appid=${API_KEY}`;

    const response = await fetch(url);
    const result = await response.json();
  }

  return (
    <View style={styles.container}>
      <Weather />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
