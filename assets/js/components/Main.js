import { ListOfBooks } from './ListOfBooks.js';

let Main = {
    data() {
        return {
            books : [
            ]
        };
    },
    components : {
        ListOfBooks
    },
    template : `
        <main>
            <h3>Découvrez <span>notre collection d'ouvrages</span></h3>
            <section class="list-of-books" id="list-of-books">
                <ListOfBooks :books="books"/>
            </section>
        </main>
    `,
};

export { Main };