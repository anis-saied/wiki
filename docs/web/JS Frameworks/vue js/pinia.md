# Pinia The intuitive store for Vue.js

## Official documentation

- [pinia.vuejs.org](https://pinia.vuejs.org/)
- [Pinia 🍍](https://github.com/posva/pinia)

### rooter cheat-sheet

- [pdf](Pinia-Cheat-Sheet.pdf)

## install

```bash
npm install pinia
```

## how to use pinia
Create a pinia instance (the root store) and pass it to the app as a plugin
```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app'
```
## Why should I use Pinia?
Pinia is a store library for Vue, it allows you to share a state across components/pages.


## Using the store
We are defining a store because the store won't be created until `use...Store()` is called within a component `<script setup>` (or within `setup()` like all composables)


## Notes
- you must return all state properties in setup stores for pinia to pick them up as state. In other words, you cannot have private state properties in stores.
- With `Setup stores` you can create `watchers` within a store and freely use any composable.
- Setup stores are also able to rely on globally provided properties like the Router or the Route. Any property provided at the App level can be accessed from the store using `inject()`, just like in components
- You can define as many stores as you want and you should define each store in a different file to get the most out of Pinia
- Once the `store` is instantiated, you can access any property defined in `state`, `getters`, and `actions` directly on the store. 
- Note that `store` is an object wrapped with `reactive`, meaning there is no need to write .value after getters
- In order to extract properties from the store while keeping its reactivity, you need to use `storeToRefs()`. It will create refs for every reactive property. This is useful when you are only using state from the store but not calling any action.
```js
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { name, doubleCount } = storeToRefs(store)
```


## Tutorials

- [https://stackabuse.com/guide-to-vue-router/](https://stackabuse.com/guide-to-vue-router/)
- 

