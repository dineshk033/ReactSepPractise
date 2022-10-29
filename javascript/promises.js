/**
 * Promises async await timing
 * settimeout ->wait for a period
 * setinterval -> invoke periodically
 */

function greeting() {
  console.log("welcome");
}

const timer = setTimeout(() => {
  console.log("Asd");
}, 5000);

clearTimeout(timer);

const INTERVAL = setInterval(() => {
  const date = new Date();
  console.log(date.getSeconds());
}, 1000);

clearInterval(INTERVAL);
// setTimeout(() => {
//   clearInterval(INTERVAL);
// }, 10000);
/**
 * count 1 to 50 using setinterval
 */

/**
 * Promise -> asynchronous method return the response(success/failure) at any point
 * able to provide and consume the response
 * states=>
 * Pending ->initial state
 * fulfilled-> success
 * rejected->failure
 */

const PROMISE = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 5000);
});

console.log(PROMISE);

PROMISE.then((val) => val * 2)
  .then((val) => val * 30)
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

async function getAsyncNumbers() {
  const result = await setTimeout(() => {
    Promise.resolve(100);
  }, 2000);
  console.log(result, "asddddddddddddddddddddddddddddd");
}

getAsyncNumbers();

var post = [];

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    let data = json;
    post = data;
    const { id } = data;
    const URL = "https://jsonplaceholder.typicode.com/comments?postId=" + id;
    return fetch(URL);
  })
  .then((response) => response.json())
  .then((json) => {
    console.log(json, post);
  });

/**
 * async await - ES6
 */

async function getRecords() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();
  const URL = "https://jsonplaceholder.typicode.com/comments?postId=" + post.id;
  const commentRes = await fetch(URL);
  const comments = await commentRes.json();
  console.log(post, comments, "===============>");
}

getRecords();

function getUserPosts(userId) {
  // https://jsonplaceholder.typicode.com/users/1
  const URL = "https://jsonplaceholder.typicode.com/comments?postId=" + id;
}
