export const dataFetching = async (url: string) =>
  fetch(url).then((response) => response.json());
