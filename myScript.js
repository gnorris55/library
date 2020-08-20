// where all book objects are stores
let myLibrary = [];

function Book(title, rating, author, numPages, readStatus)
{
    this.title = title;
    this.rating = rating;
    this.author = author;
    this.numPages = numPages;
    this.readStatus = readStatus;
}

// adds specified book to library
function addBookToLibrary(book)
{
    myLibrary.push(book);
}

function createBook()
{
    // this takes info from the main form once the submit button is clicked
    let newBook = new Book(document.forms["book-form"]["book-input"].value, 
                           document.forms["book-form"]["book-rating"].value,
                           document.forms["book-form"]["author"].value,
                           document.forms["book-form"]["num-pages"].value,
                           document.forms["book-form"]["read-status"].checked);
    // adds the newly created book to the library
    addBookToLibrary(newBook);
    // renders a table with all books and their respective ratings
    render()
}

function render()
{
    
    let table = defineReloadTabel();
    for (let r = 0; r < myLibrary.length; r++)
    {

        // creates the new rows and colums that will be displayed
        let row = document.createElement("tr");
        let title = document.createElement("td");
        let rating = document.createElement("td");
        let author = document.createElement("td");
        let numPages = document.createElement("td");
        let readStatus = document.createElement("td");

        // column with delete button
        let deleteCell = document.createElement("td");
        let button = document.createElement('button');
        button.innerHTML = "X";
        button.onclick = function() 
        {
            row.remove();
            myLibrary.splice(r, 1);
        };
        deleteCell.appendChild(button);

        // column for change status
        let changeCell = document.createElement("td");
        let changeButton = document.createElement('button');
        changeButton.innerHTML = "change";
        changeButton.onclick = function() 
        {
            myLibrary[r].readStatus = !myLibrary[r].readStatus;

            if (myLibrary[r].readStatus == true)
            {
                readStatus.innerHTML = "read";
            }
            else
            {
                readStatus.innerHTML = "not read";
            }
        };
        changeCell.appendChild(changeButton);

        // adds the information from the library array
        title.innerHTML = myLibrary[r].title;
        rating.innerHTML = myLibrary[r].rating;
        author.innerHTML = myLibrary[r].author;
        numPages.innerHTML = myLibrary[r].numPages;
        if (myLibrary[r].readStatus == true)
        {
            readStatus.innerHTML = "read";
        }
        else
        {
            readStatus.innerHTML = "not read";
        }
        
        // adds the info to the table
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(numPages);
        row.appendChild(rating);
        row.appendChild(readStatus);
        row.appendChild(changeCell);
        row.appendChild(deleteCell);
        table.appendChild(row);
        
    }
}

// defines the table than destroys all of 
// its children so the list can be reloaded with newly added books
function defineReloadTabel()
{
    let table = document.getElementById("book-list");
    while (table.firstChild) 
    {
        table.removeChild(table.lastChild);
    }
    return table
}

function toggleShow()
{
    let form = document.getElementById("form-contents");
    if (form.style.display === "none")
    {
        document.getElementById("image").src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb3%2FMinus_font_awesome.svg%2F600px-Minus_font_awesome.svg.png&f=1&nofb=1"
        form.style.display = "block";
    }
    else
    {
        document.getElementById("image").src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fmetro%2F1600%2Fplus-math.png&f=1&nofb=1"
        form.style.display = "none";
    }
}
function deleteBook()
{
    console.log("book deleted")
}




