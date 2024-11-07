const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./app");

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

// Calculator
test("Calculator: sum", () => {
  expect(calculator.sum(1, 99)).toBe(100);
});

test("Calculator: subtract", () => {
  expect(calculator.subtract(100, 1)).toBe(99);
});

test("Calculator: multiply", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("Calculator: divide", () => {
  expect(calculator.divide(100, 2)).toBe(50);
});

//Caesar Cipher
test("Caesar: shifts up", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Caesar: perserves case", () => {
  expect(caesarCipher("Abc", 1)).toBe("Bcd");
});

test("Caesar: perserves punctuation", () => {
  expect(caesarCipher("abc!", 1)).toBe("bcd!");
});

test("Caesar: wraps around", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

// analyze array
test("Analyze: avg", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Analyze: min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Analyze: max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Analyze: length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
