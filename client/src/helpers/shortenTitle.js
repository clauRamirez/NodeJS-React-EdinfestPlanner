export function shortenTitle(string, maxLength) {
  if (string.length < maxLength) return string;

  let arrayOfWords = string.slice(0, maxLength).trim();

  return arrayOfWords + "...";
}
