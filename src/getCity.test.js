import { getCity } from "./getCity";

describe("testing function: getCity", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ city: "Moscow" }),
    })
  );

  it("getCity returns city", async () => {
    const city = await getCity();
    expect(city).toBe("Moscow");
  });

  it("getCity returns error", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject());
    try {
      await getCity();
    } catch (e) {
      expect(e.message).toBe("error getCity");
    }
  });
});
