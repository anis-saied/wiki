---
sidebar_position: 1
---

# Vue JS Overview 

## Modern mode

**Modern Mode**  in Vue.js allows you to serve a separate version of your application to modern browsers that support ES modules, native dynamic imports, and other modern JavaScript features. This can lead to better performance and smaller bundle sizes for compatible browsers.
## Polyfills

**Polyfills:**  are code snippets that provide modern functionality to older browsers that lack support for certain features. By auto-detecting browser capabilities and serving polyfills only to browsers that need them, you can ensure a consistent experience across different environments.

## Learning path

-[https://www.vuemastery.com/learning-path/beginner](https://www.vuemastery.com/learning-path/beginner)

??? Vue course completion certificate. ???

## Vue conferences

-[https://www.vuemastery.com/dashboard/conferences](https://www.vuemastery.com/dashboard/conferences)



## Vue JS
- [Vue JS .org](https://vuejs.org/)
- [Vue JS CLI](https://cli.vuejs.org/guide/installation.html)


### Vue JS UI frameworks
- [antdv](https://antdv.com/components/overview/)
- [element-plus](https://element-plus.org/en-US/)
- [bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/#npm)

### Vue Js Ecosystem

- vue-router
- vuexvue-devtools
- vue-loader
- awesome-vue

## Online Editor 

- [https://vuejs.org/examples/#hello-world](https://vuejs.org/examples/#hello-world)

###  Vue JS packages

To find packages use [npmjs](https://www.npmjs.com/)
- [vue-resource](https://github.com/pagekit/vue-resource/tree/develop)
- [autocomplete](https://autocomplete.trevoreyre.com/#/)
- [vue3-simple-typeahead](https://vue3-simple-typeahead-demo.netlify.app/)

## Themes and templates

### Themes

- [https://vuejs.org/ecosystem/themes.html](https://vuejs.org/ecosystem/themes.html)
- [primevue](https://sakai.primevue.org/#/)
- [CRUD dashboard theme](https://sakai.primevue.org/#/pages/crud)

### Starter templates:

You can use these starter templates (clone github repository)
- [Vue 3 + Element Plus + Vite](https://vite-starter.element-plus.org/)
- [Element Plus With NuxtJS](https://element-plus-nuxt.vercel.app/)
- [element-plus-in-laravel-starter](https://github.com/element-plus/element-plus-in-laravel-starter)



### Vue JS admin templates

- [https://vera0119.github.io/vue-admin/#/dashboard](https://vera0119.github.io/vue-admin/#/dashboard)



## unit testing utility library for Vue.js

- [Vue Test Utils](https://v1.test-utils.vuejs.org/) is the official unit testing utility library for Vue.js.

When using Vue Test Utils for unit testing Vue.js components, you can choose from a variety of testing tools and libraries to enhance your testing capabilities. Here are some commonly used tools and libraries that pair well with Vue Test Utils:

    Jest: Jest is a popular JavaScript testing framework that works seamlessly with Vue Test Utils. It provides features like test runners, assertion libraries, mocking, and code coverage reporting. Jest is commonly used for unit testing Vue components.
        Jest Website
    
    Vue Test Utils with Vue CLI: If you're using Vue CLI to scaffold and manage your Vue.js projects, Vue Test Utils is often integrated by default. Vue CLI provides a testing setup with Jest and Vue Testing Library, making it easy to get started with Vue component testing.
        Vue CLI
    
    Vue Testing Library: Vue Testing Library is a library that encourages testing Vue components in a way that mimics how they are used by end-users. It promotes testing component behavior from a user's perspective and avoiding testing implementation details.
        Vue Testing Library
    
    @vue/test-utils-jest: This is an additional library specifically designed for Jest integration with Vue Test Utils. It simplifies certain aspects of Vue component testing when using Jest as the test runner.
        vue-test-utils-jest
    
    Cypress: While Cypress is more commonly associated with end-to-end testing, it can be used in combination with Vue Test Utils to create a comprehensive testing strategy that covers both unit and end-to-end testing for your Vue.js application.
        Cypress Website
    
    Sinon: Sinon is a library for creating spies, mocks, and stubs in JavaScript tests. It can be useful when you need to mock external dependencies or spy on function calls within your Vue components.
        Sinon
    
    Vue Router and Vuex: If your Vue.js application uses Vue Router for routing or Vuex for state management, you may want to consider tools and plugins that are specifically designed for testing these aspects of your application.
        Vue Router Testing
        Vuex Testing

The choice of which tools to use alongside Vue Test Utils depends on your specific testing needs and preferences. Jest, Vue Testing Library, and Vue CLI are commonly used and provide a good starting point for unit testing Vue components. You can also integrate other tools and libraries as needed based on your project's requirements.

## how to use vue js

Vue can be used in different ways:

- Enhancing static HTML without a build step
- Embedding as Web Components on any page
- Single-Page Application (SPA)
- Fullstack / Server-Side Rendering (SSR)
- Jamstack / Static Site Generation (SSG)
- Targeting desktop, mobile, WebGL, and even the terminal

More details of [ways-of-using-vue](https://vuejs.org/guide/extras/ways-of-using-vue.html)



Vue cheatsheets

- [Vue 3 Cheatsheet](https://learnvue.co/vue-3-essentials-cheatsheet) from learnvue.co : [PDF](https://learnvue.co/LearnVue-Vue-3-Cheatsheet.pdf)
- 

## Tutorials

- [official vue tutorials](https://vuejs.org/tutorial/) with editor on line to test it
- 

## Example of mini projects

- Simple examples from vuejs.org : [https://vuejs.org/examples](https://vuejs.org/examples)

## Definitions

### Single-File Components 

**Single-File Component** (also known as `*.vue` files, abbreviated as **SFC**). 

A Vue SFC, encapsulates the component's logic  (JavaScript), template (HTML), and styles (CSS) in a single file

### Options API vs Composition API

For production use:

- Go with Options API if you are  not using build tools, or plan to use Vue primarily in low-complexity  scenarios, e.g. progressive enhancement.
- Go with Composition API + Single-File Components if you plan to build full applications with Vue.

### Options API 

- the Options API is implemented on top of the Composition API
- centered around the concept of a "component instance" (`this`), which typically aligns better with a  class-based mental model for users coming from OOP language backgrounds. 

### Composition API

In SFCs, Composition API is typically used with  `setup` attribute

For example,  imports and top-level variables / functions declared in `<script setup>` are directly usable in the template.

- requires an understanding of how reactivity works in Vue to be used effectively.

## Features

### Reactivity

- The core feature of Vue is **declarative rendering** : When the state changes, the HTML updates automatically.

- reactivity and declarative rendering.

- State that can trigger updates when changed are considered **reactive**. We can declare reactive state using Vue's `reactive()`

- `reactive()` only works on objects (including arrays and built-in types like `Map` and `Set`).

-  `ref()`, on the other hand, can take any value type and create an object that exposes the inner value under a `.value` property

- Reactive state declared in the component's `<script setup>` block can be used directly in the template.

- we did not need to use `.value` when accessing the `message` ref in templates 

- mustaches `{{}}`are only used for text interpolation.

  Example :

  ```vue
  import { ref } from 'vue'
  const message = ref('Hello World!')
  <h1>{{ message }}</h1>
  <h1>{{ message.split('').reverse().join('') }}</h1>
  ```

  

## Directives

- A **directive** is a special attribute that starts with the `v-` prefix. 
- They are part of Vue's template syntax. 
- Similar to text  interpolations, directive values are JavaScript expressions that have  access to the component's state.

### v-bind : Attribute Bindings

To bind an attribute to a dynamic value, we use the `v-bind` directive:

The element's `id` attribute will be synced with the `dynamicId` property from the component's state.

```vue
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div>
```



example: add a dynamic `class` binding to the `<h1>`, using the `titleClass` ref as its value.

```vue
<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class="titleClass">Make me red</h1>
</template>

<style>
.title {
  color: red;
}
</style>
```

#### class bindings

```html
const isRed = ref(true)
<p :class="{ red: isRed }" ></p>
<style>
.red {
  color: red;
}
</style>
```

#### style bindings

```html
const color = ref('green')
<p :style="{ color }"></p>
```



### v-on : Event Listeners 

We can listen to DOM events using the `v-on` directive:
`increment` is referencing a function declared in `<script setup>`

```vue
<button v-on:click="increment">{{ count }}</button>
<button @click="increment">{{ count }}</button>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  // update component state
  count.value++
}
</script>
```

### v-model : two-way bindings on form input elements

Using `v-bind` and `v-on` together, we can create two-way bindings on form input elements

Old solution :

```vue
<input :value="text" @input="onInput">
function onInput(e) {
  // a v-on handler receives the native DOM event
  // as the argument.
  text.value = e.target.value
}
```

New solution :

```vue
<input v-model="text">
```

- `v-model` automatically syncs the `<input>`'s value with the bound state, so we **no longer need to use an event handler** for that.
- `v-model` works not only on text inputs, but also on other input types such as checkboxes, radio buttons, and select dropdowns.

Example

```vue
<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
```

### v-if : Conditional Rendering 

```vue
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

- This `<h1>` will be rendered only if the value of `awesome` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).
- If `awesome` changes to a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value, it will be removed from the DOM.
- We can also use `v-else` and `v-else-if` to denote other branches of the condition

example

```vue
<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>
```

### v-for : List Rendering 

- use the `v-for` directive to render a list of elements based on a source array

``` vue
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

There are two ways to update the list:

1. Call [mutating methods](https://stackoverflow.com/questions/9009879/which-javascript-array-functions-are-mutating) on the source array:

```js
todos.value.push(newTodo)
```

2. Replace the array with a new one:

```js
todos.value = todos.value.filter(/* ... */)
```

**Syntax**

```html
const list = ref([1, 2, 3])
<li v-for="item of list">{{ item }}</li>
```



 

## Computed Property 

- create a computed ref that computes its `.value` based on other reactive data sources
- A computed property tracks other reactive state used in its computation  as dependencies. 
- It caches the result and automatically updates it when  its dependencies change.

```js
const filteredTodos = computed(() => {
  // return filtered todos based on
  // `todos.value` & `hideCompleted.value`
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})
```

## Template Refs 

 *There will be cases where we need to manually work with the DOM.*

- a **template ref** - i.e. a reference to an element in the template - using the [special `ref` attribute](https://vuejs.org/api/built-in-special-attributes.html#ref)

``` html
<p ref="pElementRef">hello</p>
```

To access the ref, we need to declare a ref with matching name:

```js
const pElementRef = ref(null)
```

- Notice the ref is initialized with `null` value. 
  - This is because the element doesn't exist yet when `<script setup>` is executed. 
  - The template ref is only accessible after the component is **mounted**.

Example :

add an `onMounted` hook, access the `<p>` via `pElementRef.value`, and perform some direct DOM operations on it (e.g. changing its `textContent`).

```vue
<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  // component is now mounted.
  pElementRef.value.textContent = 'mounted!'
})
</script>

<template>
  <p ref="pElementRef">hello</p>
</template>
```



## Watchers

Sometimes we may need to perform "side effects" reactively - We can achieve this with watchers

- for  example, 

  - logging a number to the console when it changes. 

  - fetching new data when an ID changes. 

- `watch()` can directly watch a ref, and the callback gets fired whenever `count`'s value changes. 
- `watch()` can also watch other types of data sources - more details are covered in [Guide - Watchers](https://vuejs.org/guide/essentials/watchers.html).

Example :

```vue
<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
```



## Components

- Parent can pass to child:
  - data : via **props**
  - template : via **slots**
- child can pass to parent
  - data : via **emits**
  - 

### Props

pass data from parent to child

A child component can accept input from the parent via **props**. 

First, (the ChildComp.vue) it needs to declare the props it accepts:

```vue
<!-- ChildComp.vue -->
<script setup>
const props = defineProps({
  msg: String
})
</script>
```

- Note `defineProps()` is a compile-time macro and doesn't need to be imported. 

- Once declared, the `msg` prop can be used in the child component's template. 
- It can also be accessed in JavaScript via the returned object of `defineProps()`.

- The parent can pass the prop to the child just like attributes. 
- To pass a dynamic value, we can also use the `v-bind` syntax:

```html
<ChildComp :msg="greeting" />
<ChildComp :msg="'simple text'" />
```

### Emits 

pass data from child to parent

In addition to receiving props, a child component can also emit events to the parent

```vue
<script setup>
// declare emitted events
const emit = defineEmits(['response'])

// emit with argument
emit('response', 'hello from child')
</script>
```

- The first argument to `emit()` is the event name. 

- Any additional arguments are passed on to the event listener.

- The parent can listen to child-emitted events using `v-on` - here the handler receives the extra argument from the child emit call and assigns it to local state:

```html
<ChildComp @response="(msg) => childMsg = msg" />
```

### Slots

In addition to passing data via props, the parent component can also pass down template fragments to the child via **slots**:

```html
<ChildComp>
  This is some slot content!
</ChildComp>
```

In the child component, it can render the slot content from the parent using the `<slot>` element as outlet:

```html
<!-- in child template -->
<slot/>
```

Content inside the `<slot>` outlet will be treated as "fallback" content: it will be displayed if the parent did not pass down any slot content:

```html
<slot>Fallback content</slot>
```

Example :

parent: 

```vue
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const msg = ref('from parent')
</script>

<template>
  <ChildComp>content {{msg}}</ChildComp>
</template>
```

child

```vue
<template>
  <slot>Fallback content</slot>
</template>
```

result :

```tex
content from parent
```



## Lifecycle hooks

- a **lifecycle hook**  allows us to  register a callback to be called at certain times of the component's  lifecycle. 
- There are other hooks such as `onUpdated` and `onUnmounted`. 
- Check out the [Lifecycle Diagram](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram) for more details.
- Vue lifecycle hooks diagram from [learnvue.co](https://learnvue.co/articles/)

![Vue lifecycle hooks diagram](https://learnvue.co/img/articles/intro-to-vue-3/11.png) 

- If you want an [in-depth guide on Vue lifecycle hooks, check out this article](https://learnvue.co/2020/03/how-to-use-lifecycle-hooks-in-vue3/).
