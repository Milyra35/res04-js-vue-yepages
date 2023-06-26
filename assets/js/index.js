import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { App } from "./App.js";

window.addEventListener("DOMContentLoaded", function () {
	createApp(App).mount('#app');
});

let bookList = "https://res04.sites.3wa.io/yepages-api/books.json";

fetch(bookList)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	// console.log(result);
	sessionStorage.setItem("books",JSON.stringify(result));
});