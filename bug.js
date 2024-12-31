const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const data = performAsyncOperation();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

function performAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error
      if (Math.random() < 0.5) {
        reject(new Error('Something went wrong!'));
      } else {
        resolve('Data is ready!');
      }
    }, 1000);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});