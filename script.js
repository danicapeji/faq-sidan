// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);
const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);
const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

const accordion = document.querySelector(".accordion");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((posts) => {
    const postsEl = document.createElement("div");
    postsEl.setAttribute("class", "section");
    postsEl.innerHTML = `<h2>${posts.title}</h2>`;
    postsEl.addEventListener("click", toggle);
    accordion.appendChild(postsEl);

    const postBody = document.createElement("div");
    postBody.setAttribute("class", "description");
    postBody.innerHTML = `<p>${posts.body}</p>`;
    postsEl.appendChild(postBody);
  });
}
getPosts();
