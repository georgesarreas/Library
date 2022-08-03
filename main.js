//empty array
let myLibrary = [];


//object constructor
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
 //   this.info = function() {
 //       return (title + " by " + author +"," + pages + "pages, " + read)
 //}
}

// function that lets user input books in the array
function addbookToLibrary(title,author,pages,read) {
    let book = new Book (title,author,pages,read);
    myLibrary.push(book);
    displayBooks();
}

//const theHobbit = new Book ("The Hobbit", "J.R.R Tolkien", "294", "not read yet")
//console.log(theHobbit.info());

//Function to display Library as cards
function displayBooks(){
    const books = document.querySelector(".books");

    //need to remove previously displayed cards (remove the divs) before looping over again
    const removeCards = document.querySelectorAll(".card");
    console.log("previous number of entries", removeCards);
    for (let i=0; i<removeCards.length; i++) {
        removeCards[i].remove();
    }

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

    //display form on click to add a new book to lib
    const addBookBtn = document.querySelector('.add-book-btn');
    addBookBtn.addEventListener("click", displayForm);

    function displayForm() {
        document.getElementById("add-book-form").style.display= "";
    }
    
    //add the entry on form sbmission
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener("click", createEntry);

    function createEntry() {
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").value;
        
        //Break if info is missing
        if ((title="") || (author="") || (pages="") || (read="")){
            return;
        }
    
        addbookToLibrary(title,author,pages,read);

        //reset the form
        document.getElementById("add-book").reset();

    }

    // clear form 
    const resetBtn = document.querySelector(".reset-btn");
    resetBtn.addEventListener("click", resetForm);

    function resetForm() {
        document.getElementById("add-book").reset();
    }


    //adding some data manually to test
    /*addbookToLibrary("The Hobbit", "J.R.R Tolkien", "294", "not read yet");
    addbookToLibrary("The Random Name", "Someone", "315", "read");
    addbookToLibrary("The Hobbit", "J.R.R Tolkien", "294", "not read yet");
    addbookToLibrary("The Random Name", "Someone", "315", "read");addbookToLibrary("The Hobbit", "J.R.R Tolkien", "294", "not read yet");
    addbookToLibrary("The Random Name", "Someone", "315", "read");

    console.log("end of aray", myLibrary);
    displayBooks();
    */