export async function getWeather(cityName, appID) {
  let data;
  try {
    const city = cityName.split(" ").join("+");
    const url =
      `https://api.openweathermap.org/data/2.5/weather?units=` +
      `metric&q=${city}&appid=${appID}`;
    const response = await fetch(url);
    data = await response.json();
  } catch (e) {
    throw new Error("error getWeather");
  }

  return data;
}
