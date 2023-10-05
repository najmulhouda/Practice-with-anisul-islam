const makeRequest = (method, url, data) => {
  const request = new XMLHttpRequest();

  request.open(method, url);

  request.setRequestHeader("Content-type", "application/json");
  request.onload = () => {
    let data = JSON.parse(request.response);
    console.log(data);
    console.log(request.status);
    console.log(request.readyState);
    console.log(request.responseURL);
    // console.log(request);
    console.log(request.responseText);
    console.log(request.response);
  };
  request.onerror = () => {
    console.log("error");
  };
  request.send(JSON.stringify(data));
};
const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/users");
};
const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/users", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};
const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/users/1", {
    title: "fork",
    body: "bork",
    userId: 1,
  });
};

const updatePatchingData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/users/1", {
    title: "fokorfokor",
  });
};

const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE",
  });
};
deleteData();

// updatePatchingData();

// updateData();
