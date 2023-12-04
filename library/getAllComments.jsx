export default async function getAllComments() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  
    if (!res.ok) {
      // Handle non-successful responses (status other than 2xx)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return res.json();
  }
  