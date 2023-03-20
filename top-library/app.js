/* eslint-disable no-plusplus */
const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


const books = document.getElementById("books");

let bookNumber = 0
function addBookToLibrary() {
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
  
    bookNumber +=1;
    }
    console.log(myLibrary);
  // }
  console.log("outside function")
  console.log(myLibrary);

// addBookToLibrary()
