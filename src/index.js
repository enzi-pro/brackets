module.exports = function check(str, bracketsConfig) {
  // your solution
  let openingBracketsConfig = {};
  let closingBracketsConfig = {};
  for(let i = 1; i < bracketsConfig.length + 1; i++) {
    openingBracketsConfig[bracketsConfig[i - 1][0]] = i;
    closingBracketsConfig[bracketsConfig[i - 1][1]] = i;
  }
  let openingBrackets = [];
  for(let i = 0; i < str.length; i++) {
    if (openingBracketsConfig[str[i]]) {
      if (closingBracketsConfig[str[i]] && openingBrackets[openingBrackets.length - 1] === closingBracketsConfig[str[i]]) {
        openingBrackets.pop();
      } else {
        openingBrackets.push(openingBracketsConfig[str[i]]);
      }      
    } else if (closingBracketsConfig[str[i]]) {
      if (openingBrackets.pop() === closingBracketsConfig[str[i]]) {
        continue;
      } else {
        return false;
      }    
    } else {
      continue;
    }
  }
  if (openingBrackets.length > 0) {
    return false;
  } else {
    return true;
  }
}
