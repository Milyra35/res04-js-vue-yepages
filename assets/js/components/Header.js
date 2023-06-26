let Header = {
    data() {
        return {
            
        }
    },
    template: `
        <header>
            <section>
                <img src="assets/images/Logo-Blanc.svg" />
                <nav>
                    <ul>
                        <li><a href="#" class="actual">Accueil</a></li>
                        <li><a href="livres/index.html">Livres</a></li>
                        <li><a href="#">Compte</a></li>
                    </ul>
                </nav>
            </section>
            <section>
                <h1><span>Yep</span>ages</h1>
                <h2>Votre bibliothèque en ligne</h2>
                <div>
                    <button>Les livres</button>
                    <button>Mon compte</button>
                </div>
            </section>
        </header>
    `
};

export { Header };