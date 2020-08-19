let myLibrary = [];

function Book(title, rating)
{
    this.title = title;
    this.rating = rating;
}

function addBookToLibrary(book)
{
    myLibrary.push(book);
}

function createBook()
{
    console.log("new book created");
    let newBook = new Book(document.forms["book-form"]["book-input"].value, document.forms["book-form"]["book-rating"].value);
    addBookToLibrary(newBook);
    render()
}

function render()
{
    let table = document.getElementById("book-list")
    while (table.firstChild) {
        table.removeChild(table.lastChild);
      }
    for (let r = 0; r < myLibrary.length; r++)
    {
        let row = document.createElement("tr");
        let title = document.createElement("td");
        title.innerHTML = myLibrary[r].title;
        let rating = document.createElement("td");
        rating.innerHTML = myLibrary[r].rating;
        row.appendChild(title);
        row.appendChild(rating);
        table.appendChild(row);
        
    }
}





