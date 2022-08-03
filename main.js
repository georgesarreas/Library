//empty array
let myLibrary = [];


//object constructor
function Book(title,author,pages,readOrNot){
    this.title=title;
    this.author-author;
    this.pages=pages;
    this.readOrNot=readOrNot;
 //   this.info = function() {
 //       return (title + " by " + author +"," + pages + "pages, " + readOrNot)
 //}
}

// function that lets user input books in the array
function addbookToLibrary(title,author,pages,readOrNot) {
    let book = new Book (title,author,pages,readOrNot);
    myLibrary.push(book);
}

//const theHobbit = new Book ("The Hobbit", "J.R.R Tolkien", "294", "not read yet")
//console.log(theHobbit.info());

//Function to display Library as cards
function displayBooks(){
    const books = document.querySelector(".books");

    //loop over library to display
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`); //myLibrary[key] displays the value of the key
            const para=document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
    };

    //adding some data manually to test
    addbookToLibrary("The Hobbit", "J.R.R Tolkien", "294", "not read yet");
    addbookToLibrary("The Random Name", "Someone", "315", "read");
    addbookToLibrary("The Hobbit", "J.R.R Tolkien", "294", "not read yet");
    addbookToLibrary("The Random Name", "Someone", "315", "read");addbookToLibrary("The Hobbit", "J.R.R Tolkien", "294", "not read yet");
    addbookToLibrary("The Random Name", "Someone", "315", "read");

    console.log("end of aray", myLibrary);
    displayBooks();