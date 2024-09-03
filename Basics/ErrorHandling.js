function parseJSON(jsonString) {
    try {
        const result = JSON.parse(jsonString);
        console.log('Parsed JSON:', result);
    } catch (error) {
        console.error('Error parsing JSON:', error.message);
    }
}

parseJSON('{"name": "Alice"}');
parseJSON('{"name": "Alice"'); 

// Custom Errors
function calculateArea(radius) {
    if (radius <= 0) {
        throw new Error('Radius must be a positive number');
    }
    return Math.PI * radius * radius;
}

try {
    console.log('Area:', calculateArea(5));
    console.log('Area:', calculateArea(-1)); // error
} catch (error) {
    console.error('Caught Error:', error.message);
}

