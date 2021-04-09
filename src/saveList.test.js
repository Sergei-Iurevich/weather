import { saveList } from "./saveList";

describe("testing function: saveList", () => {
  it("testing function saveList", () => {
    saveList(["London", "Paris"]);
    const data = JSON.parse(localStorage.getItem("items")) || [];
    expect(data).toEqual(["London", "Paris"]);
  });
});
