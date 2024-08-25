const jsonData = `
{
    "name": "Alice",
    "age": 30,
    "skills": ["JavaScript", "React", "Node.js"]
}
`;

const parsedData = JSON.parse(jsonData);
console.log('Parsed JSON:', parsedData);

const stringifiedData = JSON.stringify(parsedData, null, 2);
console.log('Stringified JSON:', stringifiedData);

// Fetch API - Making HTTP Requests
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// GET request
fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log('GET Request:', data.slice(0, 5))) // Display first 5 posts
    .catch(error => console.error('Error:', error));

// POST request
const newPost = {
    title: 'My New Post',
    body: 'This is the content of the new post.',
    userId: 1
};

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
})
    .then(response => response.json())
    .then(data => console.log('POST Request:', data))
    .catch(error => console.error('Error:', error));
