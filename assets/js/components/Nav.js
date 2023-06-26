let Nav = {
    props : [
        "links"
    ],
    template:`
        <nav>
            <ul>
                <li v-for="link in links"><a :href=link.link>{{ link.title }}</a></li>
            </ul>
        </nav>
    `
}

export { Nav };