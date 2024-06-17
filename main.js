const submitBtn = document.querySelector(".submit");
const bookContainer = document.querySelector("#bookContainer");
const addNewBookButton = document.querySelector(".addBookButton img");

const generateID = () => Math.floor(Math.random() * 900000) + 100000;

const localStorageBooks = localStorage.getItem("Book");

let Books = localStorageBooks !== null ? JSON.parse(localStorageBooks) : [];

// add book to DOM/body
function addBookDOM(bookDetails) {
  document.body.classList.remove("show");
  const newElem = document.createElement("div");
  newElem.classList.add("book");
  newElem.innerHTML = `
      <div class="title">
        <span class="titleLabel">Book title : </span>
        <span class="title">${bookDetails.title}</span>
      </div>
      <div class="author">
        <span class="authorLabel">Book Author : </span>
        <span class="authorValue">${bookDetails.authorValue}</span>
      </div>
      <div class="pages">
        <span class="pagesLabel">Book Pages : </span>
        <span class="pagesValue">${bookDetails.pagesValue}</span>
      </div>
      <div class="read">
        <span class="readLabel">Book Readed : </span>
        <span class="readOrNot">${bookDetails.readValue}</span>
      </div>
      <button class="deleteBook">Delete</button>
      `;
  bookContainer.appendChild(newElem);
  updateLocalStorage();
  newElem.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBook")) {
      getBookId(bookDetails.bookID);
    }
  });
}

function getBookId(id) {
  Books = Books.filter((t) => t.bookID !== id);
  updateLocalStorage();
  refreshDOM();
}

document.querySelector("#blurBg").onclick = () =>
  document.body.classList.remove("show");

function submitBookDetails() {
  const bookDetails = {
    readValue: "No",
    bookID: generateID(),
    title: "unknown",
    pagesValue: "unknown",
    authorValue: "unknown",
  };
  if (document.querySelector("#titleInput").value) {
    bookDetails.title = document.querySelector("#titleInput").value;
  }
  if (document.querySelector("#AuthorInput").value) {
    bookDetails.authorValue = document.querySelector("#AuthorInput").value;
  }
  if (document.querySelector("#PagesInput").value) {
    bookDetails.pagesValue = document.querySelector("#PagesInput").value;
  }
  const checkBox = document.querySelector(".checkbox");
  bookDetails.readValue = checkBox.checked ? "Yes" : "No";
  checkBox.checked = false;
  document.querySelector("#titleInput").value = "";
  document.querySelector("#AuthorInput").value = "";
  document.querySelector("#PagesInput").value = "";
  Books.push(bookDetails);
  addBookDOM(bookDetails);
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
