function getData(method) {
  setTimeout(() => {
    method("Here is your data.");
  }, 1000);
}

getData((result) => {
  console.log(result);
});
