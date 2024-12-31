# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections. The code simulates an asynchronous operation that might fail, but the server lacks proper error handling, leading to crashes.

## Bug

The `bug.js` file contains a simple HTTP server that performs an asynchronous operation using promises.  The `performAsyncOperation` function randomly throws an error. If the error occurs, the server will crash due to an unhandled promise rejection.  This is problematic because it results in unexpected downtime and makes debugging difficult.

## Solution

The `bugSolution.js` file provides a corrected version of the server. It utilizes a `.catch()` block to handle potential errors from the promise, preventing the server from crashing.  A more robust solution would log the error with more context or send an appropriate error response to the client.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`.
4. Refresh the page several times.  Eventually, you will see the server crash due to an unhandled promise rejection.  Note that the crash will show an error message related to an uncaught exception.