export function run() {
  (async function () {
    const appID = '6483f07f86904206d5977c6c6ae4e4e1';
    const mapKey = 'AIzaSyDANLeEnr2Wf05hG0wxHA0Ucqz5CeZF_Cw';

    const data = await getWeather(await getCity());
    drawWeather(document.querySelector('.container'), data);
    await drawMap(await getCity());

    // Получаем указатели на нужные элементы
    const form = document.querySelector('form');
    const listEl = document.querySelector('#list');

    // Читаем список при старте
    const items = await readList();

    // и отрисовываем список
    drawList(listEl, items);

    async function getCity() {
      const url = 'https://get.geojs.io/v1/ip/geo.json';
      const response = await fetch(url);
      const objJSON = await response.json();
      return objJSON.city;
    }

    async function getWeather(cityName) {
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${appID}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    function drawWeather(el, data) {
      el.innerHTML = `        
        <span>${data.name}</span>
        <span>${data.main.temp}</span>        
        <img src=\"http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png\">
        `;
    }

    async function drawMap(city) {
      const el = document.querySelector('#map');
      const url = `https://maps.googleapis.com/maps/api/staticmap?center=${city}&size=500x500&key=${mapKey}`;
      el.innerHTML = `<img src=${url}>`;
    }

    async function readList() {
      return JSON.parse(localStorage.getItem('items')) || [];
    }

    // Сохраняет список
    function saveList(items) {
      localStorage.setItem('items', JSON.stringify(items));
    }

    function drawList(el, items) {
      el.innerHTML = `<ol>${items.map((el) => `<li><a href="#">${el}</a></li>`).join('')}</ol>`;
    }

    listEl.addEventListener('click', async (ev) => {
      const liElement = ev.target;
      const city = liElement.innerText;
      const data = await getWeather(city);
      drawWeather(document.querySelector('.container'), data);
      await drawMap(city);
    });

    form.addEventListener('submit', async (ev) => {
      // чтобы не перезагружать страницу
      ev.preventDefault();

      // читаем значение из формы
      const formElement = ev.target;
      const input = formElement.querySelector('input');
      const { value } = input;
      input.value = '';

      const city = value;
      const data = await getWeather(city);
      drawWeather(document.querySelector('.container'), data);
      await drawMap(city);

      // добавляем элемент в список
      items.push(value);

      if (items.length > 10) {
        items.splice(0, 1);
      }

      // обновляем список
      drawList(listEl, items);

      // сохраняем список
      saveList(items);
    });
  }());
}
