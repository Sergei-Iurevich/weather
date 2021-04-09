import { getWeather } from "./getWeather";

describe("testing function: getWeather", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          name: "London",
          main: { temp: 10 },
          weather: [{ icon: "d03" }],
        }),
    })
  );

  it("should return object data", async () => {
    const data = {
      name: "London",
      main: { temp: 10 },
      weather: [{ icon: "d03" }],
    };
    expect(await getWeather("London")).toEqual(data);
  });

  it("should return error", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject());
    try {
      await getWeather();
    } catch (e) {
      expect(e.message).toBe("error getWeather");
    }
  });
});
