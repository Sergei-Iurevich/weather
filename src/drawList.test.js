import { drawList } from "./drawList";

describe("testing function drowList", () => {
  let el;
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
  });

  it("Draw list after loading", () => {
    const myList = el.querySelector(".list");
    drawList(myList, ["London", "Paris"]);
    const ol = myList.querySelector("ol");
    const li = ol.querySelectorAll("li");
    expect(myList).toBeTruthy();
    expect(ol).toBeTruthy();
    expect(li).toBeTruthy();
    expect(li.length).toBe(2);
  });
});
