---
sidebar_position: 2
---

# Vue JS Pacckages

## vue-router


### Official documentation

- [router.vuejs.org](https://router.vuejs.org/installation.html)
- [Github repository](https://github.com/vuejs/router)

### rooter cheat-sheet

- [pdf](Vue-Router-Cheat-Sheet.pdf)


## Tutorials

- [https://stackabuse.com/guide-to-vue-router/](https://stackabuse.com/guide-to-vue-router/)


## install
1. install `vue-router`
```bash
npm install vue-router@4
```

2. Add `vue-router` to the vue js app in the `main.js` file :

```js
import { createApp } from 'vue'
const app  = createApp(App)

//router
import router from './router'
app.use(router);
```

3. To configure the routes, create `index.js` file in `/src/router/` folder containing 
the routes of the app:

```js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchComponent from "../views/search/SearchView.vue";
import DocumentView from "../views/document/DocumentView.vue";
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/search", name: "search", component: SearchComponent },
  { path: "/doc/:id", name: "docView", component: DocumentView },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
in `export default router;` the `router` will be imported in `main.js` with `import router from './router'` from `/src/router/index.js`

## pinia
1. install `pinia`
```bash
npm install pinia
```

2. Add `pinia` to the vue js app in the `main.js` file :

```js
import { createApp } from 'vue'
import App from './App.vue'
const app  = createApp(App)

//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
```
3. create a pinia store : 

Create a `/src/stores/<id>-store.js` for shared state. 

Example `main-store.js`:
```js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
  const query = ref("");
  const doc = ref(null); // Initialize doc as null
  const docList = ref([]); // Initialize docList as an empty array

  return {
    query,
    doc,
    docList
  };
});
```
3. To use `pinia` in a vue component :

In the component script:
```html
<script setup>
import { useMainStore } from "../stores/main-store"

const mainStore = useMainStore()
</script>
```
Then in the component template:
```html
<input type="search" v-model="mainStore.query"/>
```

## axios

1. install axios
```bash
npm install axios
```

2. Add `axios` as global property in a vue js app in the `main.js` file :

```js
import axios from "./axios";
app.config.globalProperties.$axios = axios;
```

3. To configure `axios`, create `axios.js` file in `/src` folder containing :

```js
import axios from "axios";

axios.defaults.baseURL = "http://localhost/<app-name>/api";

export default axios;
```
`<app-name>` is the folder name in `/opt/lampp/htdocs` 

Example : `/opt/lampp/htdocs/portfolio` , the `<app-name>` is `portfolio`