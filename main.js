let titalValue = "unknown";
let authorValue = "unknown";
let pagesValue = "unknown";
let readValue = "No";
const submitBtn = document.querySelector(".submit");
const bookContainer = document.querySelector("#bookContainer");
const deleteButton = document.querySelectorAll(".book .deleteBook");
const addNewBookButton = document.querySelector(".addBookButton img");
let deleteBookBtn = deleteButton;

// add book to DOM/body
function addBookDOM() {
  document.body.classList.remove("show");
  const newElem = document.createElement("div");
  newElem.classList.add("book");
  newElem.innerHTML = `
      <div class="title">
        <span class="titleLabel">Book title : </span>
        <span class="titalValue">${titalValue.value}</span>
      </div>
      <div class="author">
        <span class="authorLabel">Book Author : </span>
        <span class="authorValue">${authorValue.value}</span>
      </div>
      <div class="pages">
        <span class="pagesLabel">Book Pages : </span>
        <span class="pagesValue">${pagesValue.value}</span>
      </div>
      <div class="read">
        <span class="readLabel">Book Readed : </span>
        <span class="readOrNot">${readValue}</span>
      </div>
      <button class="deleteBook">Delete</button>
      `;
  bookContainer.appendChild(newElem);
  titalValue = "unknown";
  authorValue = "unknown";
  pagesValue = "unknown";
  readValue = "No";
}

document.querySelector("#blurBg").onclick = () =>
  document.body.classList.remove("show");

// get details of book
function getBookDetails() {
  document.body.classList.add("show");
  submitBookDetails();
}

function submitBookDetails() {
  titalValue = document.querySelector("#titleInput");
  authorValue = document.querySelector("#AuthorInput");
  pagesValue = document.querySelector("#PagesInput");
  const checkBox = document.querySelector(".checkbox");
  checkBox.onclick = () => {
    readValue = "Yes";
  };
  checkBox.checked = false;
  document.querySelector("#titleInput").value = "";
  document.querySelector("#AuthorInput").value = "";
  document.querySelector("#PagesInput").value = "";
}

function removeElem() {}

submitBtn.addEventListener("click", addBookDOM);
addNewBookButton.addEventListener("click", getBookDetails);
