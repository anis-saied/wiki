---
sidebar_position: 2
---

# Vue JS Pacckages

## vue-router

1. install `vue-router`
```bash
npm install vue-router
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
in `export default router;` the `router` will be imported in `main.js` with `import router from './router'`

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