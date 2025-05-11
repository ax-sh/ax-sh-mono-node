import { scrapeCore } from "./scrape-core.js";

describe("scrapeCore", () => {
  it("should work", () => {
    expect(scrapeCore()).toEqual("scrape-core");
  });
});
