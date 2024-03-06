export default function handleResponseFromAPI(promise) {
  const resolve = { status: 200, body: 'success' };
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
