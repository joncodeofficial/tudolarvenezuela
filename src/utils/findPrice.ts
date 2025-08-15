// Function to find the first price after a keyword
export const findPrice = (text: string, keyword: string) => {
  const normalizedText = text.toLowerCase();
  const normalizedKeyword = keyword.toLowerCase();

  const index = normalizedText.indexOf(normalizedKeyword);
  if (index === -1) return '0.00BS';

  // Match numbers after the keyword (supports comma or dot as decimal separator)
  const regex = /(\d+[.,]\d+)/;
  const match = normalizedText
    .substring(index + normalizedKeyword.length)
    .match(regex);

  return match ? match[1] : '0.00BS';
};
