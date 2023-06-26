import { ListOfBooks } from './ListOfBooks.js';

let Main = {
    data() {
        return {
            path : ""
        };
    },
    components : {
        ListOfBooks
    },
    setup() {
        let path = window.location.pathname;
        
        return {
            path : path
        }
    },
    template : `
        <main>
            <h3>Découvrez 
                <span>notre collection d'ouvrages</span>
            </h3>
            <article>
                <aside v-if="path === '/res04-js-vue-yepages/livres/index.html'">
                    <h3>Filtres</h3>
                    <h4>Catégories</h4>
                    <ul>
                        <li>Fantasy Jeunesse</li>
                        <li>Science-Fiction Adulte</li>
                        <li>Science-Fiction Jeunesse</li>
                        <li>Fantasy Adulte</li>
                        <li>Romance Adulte</li>
                        <li>Polar Adulte</li>
                    </ul>
                </aside>
                <section class="list-of-books" id="list-of-books">
                    <ListOfBooks :books="books"/>
                </section>
            </article>
        </main>
    `,
};

export { Main };