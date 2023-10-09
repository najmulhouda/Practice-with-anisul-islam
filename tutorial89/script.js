// // dummy data
// const posts = [
//   {
//     titile: "Post title 1",
//     body: "post description",
//   },
//   {
//     titile: "Post title 2",
//     body: "post description",
//   },
//   {
//     titile: "Post title 3",
//     body: "post description",
//   },
//   {
//     titile: "Post title 4",
//     body: "post description",
//   },
//   {
//     titile: "Post title 5",
//     body: "post description",
//   },
//   {
//     titile: "Post title 6",
//     body: "post description",
//   },
//   {
//     titile: "Post title 7",
//     body: "post description",
//   },
//   {
//     titile: "Post title 8",
//     body: "post description",
//   },
// ];

// <div class="post">
//
//       </div>

// fetch data

const fetchData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (err) {
    throw Error("data is not founded");
  }
};

const postsElement = document.querySelector(".posts");

const loadData = async () => {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  console.log(posts);
  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <h4 class="post-titile">${post.title}</h4>
    <p class="post-body">${post.body}</p>
    `;
    postsElement.appendChild(postElement);
  });
};

loadData();
