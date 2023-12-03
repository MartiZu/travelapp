export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    // Handle non-successful responses (status other than 2xx)
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return res.json();
}
