const reverse = require("./reverse");

describe("reverse", () => {
  it("Returns an empty array, when passed an empty array", () => {
    expect(reverse([])).toEqual([]);
  });

  it("Returns an array with one item, when passed an array with one item", () => {
    expect(reverse([1])).toEqual([1]);
  });

  it("Returns an array with items reversed, when passed an array with two items", () => {
    expect(reverse([1, 2])).toEqual([2, 1]);
  });

  it("Returns an array with numbers in reverse order, when passed an array with three numbers", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it("Returns an array with items in reverse order, when passed an array with ten items", () => {
    expect(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
  });

  it("Returns an array with strings in reverse order, when passed an array with three strings", () => {
    expect(reverse(["one", "two", "three"])).toEqual(["three", "two", "one"]);
  });

    it("Returns an array with objects in reverse order, when passed an array with three objects", () => {
      expect(
        reverse([{ name: "one" }, { name: "two" }, { name: "three" }])
      ).toEqual([{ name: "three" }, { name: "two" }, { name: "one" }]);
    });
});
