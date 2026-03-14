// A callback is a function passed into another function to run later.

// Classic way to handle async tasks, but can get messy.

function getData(method) {
  setTimeout(() => {
    method("Here is your data.");
  }, 1000);
}

getData((result) => {
  console.log(result);
});
