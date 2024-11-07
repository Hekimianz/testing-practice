function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i > -1; i--) {
    result += string[i];
  }
  return result;
}

const calculator = {
  sum(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

function caesarCipher(s, n) {
  const alph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const splitWord = s.split("");
  let result = "";

  splitWord.forEach((letter) => {
    const index = alph.indexOf(letter.toLowerCase());

    if (index >= 0) {
      const newIndex = (index + n) % 26;
      result +=
        letter.toUpperCase() === letter
          ? alph[newIndex].toUpperCase()
          : alph[newIndex];
    } else {
      result += letter;
    }
  });

  return result;
}

function analyzeArray(arr) {
  const total = arr.reduce((prev, curr) => {
    return prev + curr;
  });
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = total / length;
  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
