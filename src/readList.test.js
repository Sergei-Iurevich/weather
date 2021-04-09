import { readList } from "./readList";

describe("testing function: readList", () => {
  it("testing function readList", async () => {
    localStorage.setItem("items", JSON.stringify(["London", "Paris"]));
    const data = await readList();
    expect(data).toEqual(["London", "Paris"]);
  });
});
