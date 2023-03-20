
const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const bookTest = new Book("Booktitle45","Authorbenny", 2434, "Yes");
myLibrary.push(bookTest);

function addBookToLibrary() {
    const bookName = document.getElementById("name").value;
    document.getElementById("name").value = "";

    const author = document.getElementById("author").value;
    document.getElementById("name").value = "";

    const pages = document.getElementById("pages").value;
    document.getElementById("name").value = "";

    const read = document.querySelector("input[name='read']:checked").value;
    
    const Book1 = new Book(bookName, author, pages, read);

   

    myLibrary.push(Book1);
    console.log(myLibrary);
  }
  console.log(myLibrary);

// addBookToLibrary()

const books = document.getElementById("books");

const newBook = document.createElement("div");
newBook.className = "book-card";
books.appendChild(newBook);


const bookTitle = document.createElement("p");
bookTitle.innerHTML = "HOV";
bookTitle.className = "title";
newBook.appendChild(bookTitle);

const bookAuthor = document.createElement("p");
bookAuthor.innerHTML = "ZZZZ";
bookAuthor.className = "author";
newBook.appendChild(bookAuthor);

const bookPages = document.createElement("p");
bookPages.innerHTML = "343";
bookPages.className = "pages";
newBook.appendChild(bookPages);  

const readBook = document.createElement("p");
readBook.innerHTML = "YES";
readBook.className = "have-read";
newBook.appendChild(readBook);