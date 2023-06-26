

let Main = {
    data() {
        return {
            
        }
    },
    components : {
        ListOfBooks;
    },
    template : `
    <main>
        <h3>Découvrez <span>notre collection d'ouvrages</span></h3>
        <ListOfBooks />
    </main>
    `
};

export { Main };