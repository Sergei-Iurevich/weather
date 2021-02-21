export function run() {
    (async function () {
        const appID = "6483f07f86904206d5977c6c6ae4e4e1";
        const mapKey = "AIzaSyDANLeEnr2Wf05hG0wxHA0Ucqz5CeZF_Cw";

        let data = await getWeather(await getCity());
        drawWeather(document.querySelector(".container"), data);
        await drawMap(await getCity());

        // Получаем указатели на нужные элементы
        const form = document.querySelector("form");
        const listEl = document.querySelector("#list");


        // Читаем список при старте
        const items = await readList();

        // и отрисовываем список
        drawList(listEl, items);

        async function getCity() {
            const url = "https://get.geojs.io/v1/ip/geo.json";
            let response = await fetch(url);
            let objJSON = await response.json();
            return objJSON.city;
        }

        async function getWeather(cityName) {
            const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${appID}`;
            let response = await fetch(url);
            let data = await response.json();
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
            let el = document.querySelector("#map");
            let url = `https://maps.googleapis.com/maps/api/staticmap?center=${city}&size=500x500&key=${mapKey}`;
            el.innerHTML = `<img src=${url}>`;
        }

        async function readList() {
            return JSON.parse(localStorage.getItem("items")) || [];
        }

        // Сохраняет список
        function saveList(items) {
            localStorage.setItem("items", JSON.stringify(items));
        }

        function drawList(el, items) {
            el.innerHTML = `<ol>${items.map((el) => `<li><a href="#">${el}</a></li>`).join("")}</ol>`;
        }

        listEl.addEventListener("click", async (ev) => {
            let liElement = ev.target;
            let city = liElement.innerText;
            let data = await getWeather(city);
            drawWeather(document.querySelector(".container"), data);
            await drawMap(city);

        });

        form.addEventListener("submit", async (ev) => {
            // чтобы не перезагружать страницу
            ev.preventDefault();

            // читаем значение из формы
            const formElement = ev.target;
            const input = formElement.querySelector("input");
            const value = input.value;
            input.value = "";

            let city = value;
            let data = await getWeather(city);
            drawWeather(document.querySelector(".container"), data);
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




