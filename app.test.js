const { capitalize, reverseString } = require("./app");

// capitalize
test("Capitalize: Works with single word strings.", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Capitalize: Works with single word strings.", () => {
  expect(capitalize("world")).toBe("World");
});

test("Capitalize: Works with multiple word strings.", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("Capitalize: Works with multiple word strings.", () => {
  expect(capitalize("goodbye world")).toBe("Goodbye world");
});

// reverseString
test("reverseString: Works with single word strings.", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("reverseString: Works with single word strings.", () => {
  expect(reverseString("World")).toBe("dlroW");
});

test("reverseString: Works with multiple word strings.", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("reverseString: Works with multiple word strings.", () => {
  expect(reverseString("Goodbye World")).toBe("dlroW eybdooG");
});
