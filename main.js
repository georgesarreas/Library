//empty array
let myLibrary = [];


//object constructor
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

// function that lets user input books in the array
function addBookToLibrary(title,author,pages,read) {
    let book = new Book (title,author,pages,read);
    myLibrary.push(book);
    displayBooks();
}

//Function to display Library as cards
function displayBooks(){
    const books = document.querySelector(".books");

    //need to remove previously displayed cards (remove the divs) before looping over again
    const removeCards = document.querySelectorAll(".card");
    console.log("node count of card divs : ", removeCards);
    for (let i=0; i < removeCards.length; i++) {
        removeCards[i].remove();
    }

    //loop over library to display
    let index=0;
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

    //create remove book btn and class attribute for each card
    const removeBookBtn = document.createElement("button");
    removeBookBtn.classList.add("remove-book-btn");
    removeBookBtn.textContent = "Remove From Library";
    console.log ("show me array inside of for-each loop", myLibrary)
    
    //link the data attribute of remove btn to the array and card
    removeBookBtn.dataset.linkedArray = index;
    console.log ("link back to the array", removeBookBtn.dataset.linkedArray);
    card.appendChild(removeBookBtn);

    //event listener for remove book from lib and card from parent div via datalink
    removeBookBtn.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary() {
        let bookToRemove = removeBookBtn.dataset.linkedArray;
        console.log("remove item via data attribute", parseInt(bookToRemove));
        myLibrary.splice(parseInt(bookToRemove), 1);
        card.remove();
        displayBooks();
    } 
    
    //create read status button and attribute for cards
    const readBtn = document.createElement("button");
    readBtn.classList.add("read-btn");
    readBtn.textContent = "toggle read status";

    //link readBtn to the array and card
    readBtn.dataset.linkedArray = index;
    console.log("readbtn data set link back to the array", readBtn.dataset.linkedArray);
    card.appendChild(readBtn);

    //create toggle logic for read btn on array objects
    readBtn.addEventListener("click", toggleRead);

    function toggleRead() {
        let bookToToggle = readBtn.dataset.linkedArray;
        Book.prototype = Object.create(Book.prototype);
        const toggleBook = new Book();
        console.log("initial value of read", myLibrary[parseInt(bookToToggle)].Read);

        // check read value to toggle from
        if ((myLibrary[parseInt(bookToToggle)].Read) == "Yes") {
            toggleBook.Read ="No";
            myLibrary[parseInt(bookToToggle)].Read = toggleBook.Read;
        } else if ((myLibrary[parseInt(bookToToggle)].Read)=="No") {
            toggleBook.Read= "Yes";
            myLibrary[parseInt(bookToToggle)].Read = toggleBook.Read
        }
        displayBooks();

    }

    //loop over object keys & valuesto display cards
    for (let key in myLibrarys) {
        console.log(`${key}: ${myLibrarys[key]}`); //myLibrary[key] displays the value of the key
        const para = document.createElement("p");
        para.textContent = (`${key}: ${myLibrarys[key]}`);
        card.appendChild(para);
    }

    index ++;
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
        if ((title=="") || (author=="") || (pages=="") || (read=="")){
            return;
        }
    
        addBookToLibrary(title,author,pages,read);

        //reset the form
        document.getElementById("add-book").reset();

    }

    // clear form 
    const resetBtn = document.querySelector(".reset-btn");
    resetBtn.addEventListener("click", resetForm);

    function resetForm() {
        document.getElementById("add-book").reset();
    }
