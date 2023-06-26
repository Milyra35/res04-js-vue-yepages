let bookList = sessionStorage.getItem("books");
// console.log(bookList);
let books = JSON.parse(bookList);
// console.log(books);

let ListOfBooks = {
    data() {
        return {
            books
        };
    },
    template: `
        <article v-for="book in books">
            <img :src="book.image">
            <h4>{{ book.title }}</h4>
            <p class="category">{{ book.category }}</p>
            <p class="author">{{ book.author }}</p>
            <button>Découvrir le livre</button>
        </article>
    `
};



export { ListOfBooks };