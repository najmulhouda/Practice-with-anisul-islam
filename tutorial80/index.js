const promise = new Promise((resolve, reject) => {
  let completed = false;
  if (completed) {
    resolve("success");
  } else {
    reject(new error("Something went wrong"));
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
