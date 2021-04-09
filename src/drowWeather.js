export function drawWeather(elem, data) {
  const element = elem;
  element.innerHTML = `     
        <span>${data.name}</span>
        <span>${data.main.temp}</span>
<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        `;
}
