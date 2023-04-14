# Project: Evaluate News NLP

## Project Architecture

### Architecture

#### Description

Uses _**MeaningCloud**_ api to take the text as input and returns the result with contains _polarity_, _subjectivity_ and various _others parameters_

---

#### Dependencies

```
- body-parser
- cors
- dotenv
- express
- node-fetch
- webpack
- webpack-cli
```

---

#### Dev Dependencies

```
-   @babel/core
-   @babel/preset-env
-   babel-loader
-   clean-webpack-plugin
-   css-loader
-   style-loader
-   html-webpack-plugin
-   jest
-   mini-css-extract-plugin
-   node-sass
-   optimize-css-assets-webpack-plugin
-   sass-loader
-   terser-webpack-plugin
-   webpack-dev-server
-   workbox-webpack-plugin
```

---

Added node_modules, dist and .env to .gitignore file.

---

#### How To Run

- **use npm run build-dev:** opens up the webpage in the browser.
- **use npm run build-prod:** compiles the webapp into dist folder.
- **use npm run start:** starts the server that serves the requests.

---

### Configs

Added **development configuration** to **webpack.dev.js**, uses webpack-dev-server for app development. Use npm run build-dev for developement configuration.
Added **production configuration** to **webpack.prod.js**, minifies and creates a application build. Use npm run build-prod for production configuration.
Use npm run start to start the http server(express).

---

### Content

Contents include index.html and 2 js files and scss files.

---

## Functionality

### API

On form submit an API request is made.
API_KEY is stored in the server.js
Information from the api is shown in the UI.

---

### Offline Functionality

The project has service workers implemented:

**Workbox plugin** is implemented in webpack.prod.js
The service is called from **index.html**

---

### Testing

- Check the project has **Jest** installed and **npm run test** script is implemented to run Jest.
- Every src/js file has at least one unit test.
- All tests have passed.

---

### Interactions

- A single field form that uses the correct HTML tags and structure.
- form input is validated and returns an error to alert the user.
