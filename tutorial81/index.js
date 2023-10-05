console.log("hello");

const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task one");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    resolve("task Two");
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    resolve("task Three");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task Four");
  });
};
taskOne()
  .then((res) => console.log(res))
  .then(taskTwo)
  .then((res) => console.log(res))
  .then(taskThree)
  .then((res) => console.log(res))
  .then(taskFour)
  .then((res) => console.log(res));
