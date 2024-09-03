// Callbacks
function fetchDataCallback(url, callback) {
    setTimeout(() => {
        const data = { message: 'Data fetched from ' + url };
        callback(data);
    }, 1000);
}

fetchDataCallback('https://api.example.com', (data) => {
    console.log('Callback:', data);
});

// Promises
function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: 'Data fetched from ' + url };
            resolve(data);
        }, 1000);
    });
}

fetchDataPromise('https://api.example.com')
    .then(data => console.log('Promise:', data))
    .catch(error => console.error('Error:', error));

// Async/Await
async function fetchDataAsync(url) {
    try {
        const data = await fetchDataPromise(url);
        console.log('Async/Await:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataAsync('https://api.example.com');
