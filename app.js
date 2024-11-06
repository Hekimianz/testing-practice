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

module.exports = { capitalize, reverseString };
