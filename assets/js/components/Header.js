import { Nav } from './Nav.js';

let Header = {
    data() {
        return {
            path:"",
            links : [
                {
                    title : "Accueil",
                    link : "../index.html"
                },
                {
                    title : "Livres",
                    link : "livres/index.html"
                },
                {
                    title : "Compte",
                    link : "compte/index.html"
                }
            ]
        };
    },
    components : {
        Nav
    },
    setup() {
        let path = window.location.pathname;
        
        return {
            path : path
        }
    },
    template: `
        <header>
            <section>
                <img src="assets/images/Logo-Blanc.svg" />
                <Nav :links="links"/>
            </section>
            <section>
                <h1><span>Yep</span>ages</h1>
                <h2 v-if="path === '/res04-js-vue-yepages/index.html'">Votre bibliothèque en ligne</h2>
                <h2 v-if="path === '/res04-js-vue-yepages/livres/index.html'" class="title">La collection</h2>
                <div v-if="path === '/res04-js-vue-yepages/index.html'">
                    <button>Les livres</button>
                    <button>Mon compte</button>
                </div>
            </section>
        </header>
    `
};

export { Header };