const palindromes = function (str) {
    const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return processedStr.split("").reverse().join("") == processedStr;
};

// Do not edit below this line
module.exports = palindromes;
