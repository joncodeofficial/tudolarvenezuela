export const localStorageProvider = () => {
  const map = new Map(
    JSON.parse(localStorage.getItem('tudolarvenezuela-cache') || '[]')
  );
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('tudolarvenezuela-cache', appCache);
  });
  return map;
};
