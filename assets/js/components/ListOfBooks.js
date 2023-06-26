let bookList = "https://res04.sites.3wa.io/yepages-api/books.json";
let ListOfBooks;

fetch(bookList)
.then(function(response) {
    return response.json();
})
.then(function(result) {
    console.log(result);
    
    ListOfBooks = {
        props : [
            "books"
        ],
        template: `
            <article v-for="book in books">
                <img src={{ book.image }}>
                <h4>{{ book.title }}</h4>
                <p class="category">{{ book.category }}</p>
                <p class="author">{{ book.author }}</p>
                <button>Découvrir le livre</button>
            </article>
        `
    };
})



export { ListOfBooks };