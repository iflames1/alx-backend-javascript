export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      resolve('API response');
    }, 1000);
  });
}
