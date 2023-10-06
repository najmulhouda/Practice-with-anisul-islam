console.clear();
const makeRequest = async (config) => {
  return await axios(config);
};

const getData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  }).then((res) => console.log(res.data));
};
getData();
