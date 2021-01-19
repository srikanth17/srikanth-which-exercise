## Application

I've used ES6 JavaScript standard to code this application. Built with React and TypeScript.

**Prerequisites**

1. Install [yarn](https://yarnpkg.com/en/).
2. For macOS users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#mac-stable).
3. For Windows users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#windows-stable). There are several ways to install yarn, you can select one option.

If you have problems in installing _yarn_ on your machine, you can also run the application using _npm_. Install [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com). Instead of _yarn_ commands below, use _npm_ commands like, _npm install_.

---

## Build & Run the App

Inside the cloned directory, run the following commands.

1. **npm install**. This will install all the dependencies.
2. **npm run build-prod**. This will run webpack in production mode.
3. **npm run serve**. This will run the application on localhost via _live-server_ & automatically opens a web browser showing the application running.

**Webpack**

I've used webpack, a module bundler to run babel & also to build the project. After building, webpack outputs a single JS (bundle.js) file containing all the javascript files & a single CSS (styles.css) containing all the styles.

**Directory Structure**

All the JS code live in _/src/_ directory. _app.js_ is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.

**Components**

1. App - This is the main component for the application, where the Numbers are rendered.
2. Header - The header component of the app.
3. Multiples - This component renders all numbers from 1 to 144.
4. Number - This component render a number

**Assumptions**

1. I've used materialize-css to follow grid layout.

**Unit Tests**

Test cases are written in _/src/tests/_.

**Styling**

SCSS is used to style the app. I've used bootstrap to import basic styling. Styles live in '_/src/styles_' directory. Compiled into CSS via webpack loaders & separated to a styles.css using '_mini-css-extract-plugin_'.

# Which? Javascript Exercise

## Getting up and running

Clone or fork this repo. If you'd rather start from scratch with your own setup that's fine too, as long as you complete [the exercise](#the-exercise).

This repo contains a very simple webpack based development environment. We'll need to install some stuff to get going...

### Requirements

Webpack needs nodejs to do its thing. We aren't making a node app - just using it as a dev tool.

- [nodejs](https://nodejs.org/en/)

Installing node.js will also install [npm](https://www.npmjs.com) for us too. We'll need it for dependencies and some scripts.

### Dependencies

We have specified all the dependencies we need in the `package.json` file. Npm will install them for us:

`$ npm install`

### Run!

Ok, time to run the app. Npm takes care of business again:

`$ npm start`

This will fire up the wepback dev server. It's not important to understand how it works for now.

Open [http://localhost:8080/](http://localhost:8080/) in your browser and you should see a basic html page. If you open the development console in your browser you should see a welcome message.

### Development

The source files are located in `src/`. If you change a file, webpack will reload your files and refresh the browser for you.

### Test

You can run the example tests:

`$ npm test`

## The exercise

**Goal**: Production of a client-side Web application to help a child understand multiplication.

**Duration**: This test is intended to take ~2 hours but may take more

**Description**: The application will display a grid of all the numbers from 1 to 144 evenly laid out with a large clickable box around each number. The number should be centered in each box. When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way. Clicking on a second number removes the highlighting of the previous selection, then highlights the multiples of the newly selected number.

**Constraints**: On mobile devices the grid will display 1 number per row. On tablet devices 2 numbers per row and on desktop and larger devices 3 numbers per row. The numbers should fill their rows equally. When the screen width grows very large a margin should appear either side of the grid so that the boxes don’t keep getting larger.

You do not need to use any libraries but if you do, you should be able to explain the reasons for your choices.

If there is any information that you feel is missing from the story then please make sensible decisions (for example it’s up to you how you define ‘mobile’, as long as it’s sensible, similarly please define highlighting).

**Criteria for assessment**: Important things that will be assessed are:

- Project layout.
- Coding style, i.e. your approach not whether you use semicolons or not ;)
- Your approach to unit testing/TDD
- Maintainability and extensibility
- Use of responsive design
- Performance & Accessibility
- Naming conventions used
- Meeting the requirements

The test won’t be assessed on design at all, so don’t worry how it looks.
