/* eslint-disable no-plusplus */
const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// const books = document.getElementById("books");
const books = document.createElement("div");
  books.id = "books";
  document.body.appendChild(books);
  if (books.innerHTML === ""){
    books.style.borderWidth = "0";
  }

  console.log(books.innerHTML);



let bookNumber = 0;
function addBookToLibrary() {
  books.style.borderWidth = "1px";
  

  // Get input values
  const bookName = document.getElementById("name").value;
  document.getElementById("name").value = "";

  const author = document.getElementById("author").value;
  document.getElementById("author").value = "";

  const pages = document.getElementById("pages").value;
  document.getElementById("pages").value = "";

  const read = document.querySelector("input[name='read']:checked").value;

  const Book1 = new Book(bookName, author, pages, read);

  myLibrary.push(Book1);

  // for(let i = 0; i < myLibrary.length; i++){

  const newBook = document.createElement("div");
  newBook.className = "book-card";
  books.appendChild(newBook);

  const bookTitle = document.createElement("p");
  bookTitle.innerHTML = myLibrary[bookNumber].title;
  bookTitle.className = "title";
  newBook.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.innerHTML = myLibrary[bookNumber].author;
  bookAuthor.className = "author";
  newBook.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.innerHTML = myLibrary[bookNumber].pages;
  bookPages.className = "pages";
  newBook.appendChild(bookPages);

  const readBook = document.createElement("p");
  readBook.innerHTML = myLibrary[bookNumber].read;
  readBook.className = "have-read";
  newBook.appendChild(readBook);

  const removeBook = document.createElement("button");
  removeBook.innerHTML = "Remove";

  // readBook.className = "have-read";
  newBook.appendChild(removeBook);

  removeBook.addEventListener("click", () => {
    newBook.remove();
  });

  bookNumber += 1;
  console.log(books.innerHTML);
}

