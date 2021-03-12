export async function getWeather(cityName, appID) {
  const url =
    `https://api.openweathermap.org/data/2.5/weather?units=` +
    `metric&q=${cityName}&appid=${appID}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
