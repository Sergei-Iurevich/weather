import { drawWeather } from "./drowWeather";

describe("testing function drawWeather", () => {
  let el;
  let divForWeather;
  beforeEach(async () => {
    el = document.createElement("div");
    el.innerHTML = `<div class="divForWeather"> </div>
                        <form>
                            <input
                                    id="userInput"
                                    placeholder="Type and press enter"
                                    required
                                    autofocus
                            />
                            <button>Add item</button>
                        </form>
                        <div class="list"></div>
                        <div class="map"></div>
                        `;
    divForWeather = el.querySelector(".divForWeather");
  });

  it("after execution drawMap", () => {
    const data = {
      name: "London",
      main: { temp: 10 },
      weather: [{ icon: "d03" }],
    };
    drawWeather(divForWeather, data);
    const span = divForWeather.querySelectorAll("span");
    const img = divForWeather.querySelector("img");
    expect(span).toBeTruthy();
    expect(img).toBeTruthy();
    expect(span.length).toBe(2);
    expect(span[0].textContent).toBe("London");
    expect(span[1].textContent).toBe("10");
    expect(img.src).toBe("http://openweathermap.org/img/wn/d03@2x.png");
  });
});
