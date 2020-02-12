const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
});

describe("utils.countBooks", ()) => {
  test("returns 2 when there are two books", () => {
    expect(utils.countBooks(['Fantistic Mr Fox', 'Hrowth Mindselt'])).toBe(2);
  })
}

describe("utils.getTotalOrderPrice", ()) => {
  test("returns 43.2 when given 18 * 2 books", () => {
    expect(utils.getTotalOrderPrice(18, 2));
  })
}