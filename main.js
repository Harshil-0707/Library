const submitBtn = document.querySelector(".submit");
const bookContainer = document.querySelector("#bookContainer");
const addNewBookButton = document.querySelector(".addBookButton img");

const generateID = () => Math.floor(Math.random() * 900000) + 100000;

let Books = JSON.parse(localStorage.getItem("Book")) || [];

function Book(title, author, pages, read) {
  this.BookID = generateID();
  this.title = title || "unknown";
  this.author = author || "unknown";
  this.pages = pages || "unknown";
  this.read = read ? "Yes" : "No";
}

// add book to DOM/body
function addBookDOM(book) {
  document.body.classList.remove("show");
  const newElem = document.createElement("div");
  newElem.classList.add("book");
  newElem.innerHTML = `
      <div class="title">
        <span class="titleLabel">Book title : </span>
        <span class="title">${book.title}</span>
      </div>
      <div class="author">
        <span class="authorLabel">Book Author : </span>
        <span class="authorValue">${book.author}</span>
      </div>
      <div class="pages">
        <span class="pagesLabel">Book Pages : </span>
        <span class="pagesValue">${book.pages}</span>
      </div>
      <div class="read">
        <span class="readLabel">Book Readed : </span>
        <span class="readOrNot">${book.read}</span>
      </div>
      <button class="deleteBook">Delete</button>
      `;
  bookContainer.appendChild(newElem);
  newElem.querySelector(".deleteBook").addEventListener("click", () => {
    console.log(book.BookID);
    deleteBookById(book.BookID);
  });
  updateLocalStorage();
}

function deleteBookById(id) {
  Books = Books.filter((book) => book.BookID !== id);
  updateLocalStorage();
  refreshDOM();
}

document.querySelector("#blurBg").onclick = () =>
  document.body.classList.remove("show");

function submitBookDetails() {
  const title = document.querySelector("#titleInput").value;
  const author = document.querySelector("#AuthorInput").value;
  const pages = document.querySelector("#PagesInput").value;
  const checkBox = document.querySelector(".checkbox").checked;

  const newBook = new Book(title, author, pages, checkBox);

  Books.push(newBook);
  addBookDOM(newBook);

  document.querySelector("#titleInput").value = "";
  document.querySelector("#AuthorInput").value = "";
  document.querySelector("#PagesInput").value = "";
  document.querySelector(".checkbox").checked = false;
}

function updateLocalStorage() {
  localStorage.setItem("Book", JSON.stringify(Books));
}

function refreshDOM() {
  bookContainer.innerHTML = "";
  Books.forEach(addBookDOM);
}

refreshDOM();

submitBtn.addEventListener("click", submitBookDetails);
addNewBookButton.addEventListener("click", () =>
  document.body.classList.add("show")
);

function currentMonth() {
  const year = new Date().getFullYear();
  const footer = document.querySelector("footer");
  footer.innerHTML = `
    Copyright &copy; ${year} Harshil-0707 <a href="https://github.com/Harshil-0707" target="_blank"><img class="githublogo" src="./github.svg" alt="github" /></a>
  `;
}

currentMonth();
