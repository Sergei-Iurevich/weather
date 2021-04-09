import { drawMap } from "./drawMap";

describe("testing function drawMap", () => {
  let el;
  let map;
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
    map = el.querySelector(".map");
  });

  it("after execution drawMap", () => {
    drawMap(map, "Moscow", "AIzaSyDAN");
    const img = map.querySelector("img");
    const strGoogleMap =
      "^https://maps\\.googleapis\\.com\\/maps\\/a" +
      "pi\\/staticmap\\?center=\\w+&size=500x500&key=";
    const regexp = new RegExp(strGoogleMap, "i");
    const regexpCity = /Moscow/i;

    expect(img).toBeTruthy();
    expect(regexp.test(img.src)).toBeTruthy();
    expect(regexpCity.test(img.src)).toBeTruthy();
  });
});
