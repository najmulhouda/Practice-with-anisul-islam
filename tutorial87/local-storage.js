// console.log(window.localStorage);

localStorage.setItem("userName", "john");
localStorage.setItem("password", "pass");

const userName = localStorage.getItem("userName");
const password = localStorage.getItem("password");

console.log(userName + " " + password);

localStorage.removeItem("name");

const country = ["bd", "cd ", "jd", "kd"];
localStorage.setItem("country", JSON.stringify(country));

document.cookie = "username= Najmul; expires=Mon, 9 Oct 2023 7:40:00 GMT";

console.log(document.cookie);
