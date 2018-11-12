# Opiate Free
This project is made for the College Tech Challenge FALL 2018. Connecticut ranks the highest state in opiate abuse and deaths. In response, the state has provided numerous resources to help individuals and families struggling with opiate abuse. The goal of the project is to develop an accessible web-based application that inform users about opiate addiction and direct them to state resources.
## Prerequisites
* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [Vuejs CLI](https://cli.vuejs.org/guide/installation.html)
* [Vuex](https://vuex.vuejs.org/installation.html)

### Running
1. Open git bash in the directory you want to download the project to and run command < git clone https://github.com/june11084/Opiate-Free.git >
2. Open git bash in the project directory and run command < npm install >
3. Run command < cd src >
4. Run command vue serve
5. Copy and paste generated URL into browser.

### Getting Started with Vuejs
1. Setup Node.js
2. Install Vuejs CLI through npm: run command in terminal < npm install -g @vue/cli >
3. Install Vuex through npm: run command in ternimal < npm install vuex --save >
4. Create project template: run command < vue create roject-Name >

## Useful Documentations
* [Vuejs](https://vuex.vuejs.org/)
* [Vuex](https://vuejs.org/v2/guide/index.html)

## Development
**MVP**

| Plans        | functionality    | Progress  |
| ------------- |:-------------:| -----:|
| Create Project with Vuejs      | language/framework requirement |  Done  |
|   Project is structed with Vuex    | state management     |  Done   |
|App runs on browser | app requirement| Done|
| Use data.ct.gov  | get data from api call    |    Done    |
| Use google maps API  | implement custom google maps     |    Done    |

**Future implementations**

| Feature        | Assigned     | Progress  |
| ------------- |:-------------:| -----:|
| Mobile version | NA |  NA  |

### Project Structuring
This project is structed with vuex, a plugin that is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

```
1. In Opiate-Free\src contains a store folder that contains a index.js file and modules folder that contains js files for components.
2. Each js file contains 4 objects that are exported: state, getters, mutations, actions.
3. index.js is where plugins are declared to be used by vue and js files from modules are exported into the global store so they can be imported and used in any components.

```
### Plugins
```
1. Vuex - For state management
2. Axios - For making api calls
3. Google Maps Api - For creating a custom map with markers
```
### Styling
* Styling can be done locally in each component .vue files.
* To use custom css such as w3, download the css file into assets and import it in App.vue.

```
<script>
import './assets/w3.css';
import HelloWorld from './components/HelloWorld.vue'
import RouteTester from './components/RouteTester.vue'
import GraphData from './components/GraphData.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    RouteTester,
    GraphData
  }
}
</script>

```
### Testing Tools
* We used [Postman](https://www.getpostman.com/) to test api calls and read JSON objects in a readable format.
* Google Chrome browser - CTRL+SHIFT+i > console or right click a page > inspect


### Known Problems
```

```
### Changes to be made
```

```
### Authors
* [**Jun Li**](https://github.com/june11084)
* [**Vu Truong**](https://github.com/hirovu)

### License
[MIT](https://choosealicense.com/licenses/mit/)
