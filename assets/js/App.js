import { Header } from './components/Header.js';
import { Main } from './components/Main.js';

let App = {
    data() {
        return {
            
        }
    },
    components : {
        Header, 
        Main
    },
    template: `
    <Header />
    <Main />
    `
}

export { App };