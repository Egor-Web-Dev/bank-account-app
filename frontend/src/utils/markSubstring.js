function markSubstring(string, regExp) {
  return string.replace(regExp, `<strong>$&</strong>`);
}

export default markSubstring;
