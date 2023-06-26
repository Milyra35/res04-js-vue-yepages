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
    mounted() {
        this.sortList();    
    },
    setup() {
        let path = window.location.pathname;
        
        return {
            path : path
        };
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
    methods : {
        sortList()
        {
            let categories = document.querySelectorAll("main aside ul li");
        	let bookByCat = document.querySelectorAll("main .list-of-books article");
        	
        	for (let categorie of categories) {
        		categorie.addEventListener("click", function (event) {
        			let filters = event.target.textContent;
        			event.target.classList.toggle("selected");
        			
        			for (let book of bookByCat) {
        			let bookCategory = book.querySelector("p.category").textContent;
        			
        				if (bookCategory === filters) 
        				{
        					book.classList.toggle("active");
        				} 
        				else if (bookCategory !== filters) 
        				{
        					book.classList.toggle("inactive");
        				}
        			}
        		});
        	}
        }
    }
};

export { Main };