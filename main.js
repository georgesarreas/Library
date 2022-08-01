//empty array
let myLibrary = [];


//object constructor
function book(title,author,pages,readOrNot){
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
    let newBook = new book (title,author,pages,readOrNot);
    myLibrary.push(newBook);
}

//const theHobbit = new book ("The Hobbit", "J.R.R Tolkien", "294", "not read yet")
//console.log(theHobbit.info());
