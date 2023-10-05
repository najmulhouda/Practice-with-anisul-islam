console.log("hello");

const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task one");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task Two");
    }, 3000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("task Three is not coompleted");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task Four");
  });
};
// taskOne()
//   .then((res) => console.log(res))
//   .then(taskTwo)
//   .then((res) => console.log(res))
//   .then(taskThree)
//   .then((res) => console.log(res))
//   .then(taskFour)
//   .then((res) => console.log(res));
//   .catch((err) => console.log(err));

async function callAllTask() {
  try {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
  } catch (err) {
    console.log(err);
  }
}

callAllTask();

console.log("bye");
