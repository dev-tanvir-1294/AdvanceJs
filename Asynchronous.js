// A callback is a function passed into another function to run later.

// Classic way to handle async tasks, but can get messy.

function getData(method) {
  setTimeout(() => {
    method("Here is your data using callback with arguments.");
  }, 1000);
}

getData((result) => {
  console.log(result);
});

getData(data);

function data() {
  console.log("Here is your data using without arguments.");
}


// A Promise represents a future value.

// It can be pending → fulfilled → rejected.

// You chain .then() for success and .catch() for errors.

// This is promise chaining, which helps avoid "callback hell."

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded!"), 1000);
});

promise
  .then((result) => console.log(result)) // "Data loaded!"
  .catch((error) => console.error(error));



// Async/Await

// Built on top of Promises.

// Makes async code look synchronous.

// You use await inside an async function.

async function loadData() {
  try {
    let result = await new Promise(resolve => {
      setTimeout(() => resolve("Data ready!"), 1000);
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

loadData();



// Fetch API
// The Fetch API is a real-world use of Promises.

// It’s used to make HTTP requests.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

  async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPost();
