## React project boiler plate

This project is an attemp to create an usable start for a React.js project, it's been built using Webpack as bundle generator, Babel as transpiler, Jest and Enzyme as testing platform, Sass as styling pre-processor, everything under the support of cool tools like Prettier and Eslint pointing to increase the development productivity and enforce best practices at the coding time. So i really hope you enjoy it.

I want to say that this project was built taking base on a really good tutorial about how to setup an development environment for React.js, well this is is a tutorial divided in three parts, I let you the links:

- Part 1: [How to combine webpack 4 and babel 7 to create a fantastic react app.](https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff)
- Part 2: [These tools will help you write clean code.](https://medium.freecodecamp.org/these-tools-will-help-you-write-clean-code-da4b5401f68e)
- Part 3: [How to setup Jest & Enzime like a boss.](https://www.freecodecamp.org/news/how-to-set-up-jest-enzyme-like-a-boss-8455a2bc6d56/)

**Thanks to the autor!** [Adeel Imran](https://www.freecodecamp.org/news/author/adeel/).

I recommend you to follow the tutorials above to understand what i've done here, and once you got it you can follow the changes made by me putting everything together like a small ecosystem adapting it to my needs like a comfortable scaffolding.

First, the development packages you need to create this boilerplate are:

**For compiling and building:**

- @babel/core
- @babel/plugin-proposal-class-properties
- @babel/plugin-proposal-export-namespace-from
- @babel/plugin-proposal-throw-expressions
- @babel/plugin-syntax-dynamic-import
- @babel/polyfill
- @babel/preset-env
- @babel/preset-react
- babel-loader
- copy-webpack-plugin (not required)
- css-loader
- html-webpack-plugin
- mini-css-extract-plugin
- node-sass
- optimize-css-assets-webpack-plugin
- sass-loader
- style-loader (not required)
- file-loader
- uglifyjs-webpack-plugin (not required)
- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge
- webpack-visualizer-plugin

**For code formating and style guides:**

- babel-eslint
- eslint
- eslint-config-airbnb
- eslint-config-jest-enzyme
- eslint-plugin-babel
- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- husky
- lint-staged
- prettier

**For testing your app:**

- babel-jest
- enzyme
- enzyme-adapter-react-16
- jest

All of the packages mentioned above could be installed as a dev dependencies using the next command:

    npm i --save-dev <all the packages>

For example if i want to install the packages for style guides and format i copy and paste teh following in my command line:

    npm i --save-dev babel-eslint eslint eslint-config-airbnb eslint-config-jest-enzyme eslint-plugin-babel eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks husky lint-staged prettier

And of course, we can't forget the main player, React.js and it's relative packages:

- react
- react-dom

We can intall them as project dependencies using:

    npm i --save-dev react react-dom

For accomplish the integration between all the tools, i read some other tutorials and the official documentation, here are the related links to illustrate you:

- [To integrate webpack and jest to use sass and images](https://jestjs.io/docs/en/webpack.html).
- [Configure enzyme and react](https://enzymejs.github.io/enzyme/docs/installation/).
- [Configure prettier](https://prettier.io/docs/en/configuration.html).
- An overall tutorial that aim the same goal: [setting up a minimal react app.](https://dev.to/th3n0m4d/setting-up-a-minimal-react-app-from-scratch-part-1-3-k5m).
- More about [Webpack.](https://webpack.js.org/).
- Some material about a [ good file structure](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145).
- An interesting and useful article about using [lint-staged and husky](https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc).
- And some about [react best practices](https://towardsdatascience.com/react-best-practices-804def6d5215).

**Folders organization explanation:**

That is how our file structure looks like:

    my-app
    │
    ├── build
    │
    ├── config
    │   ├── enzyme.config.js
    │   ├── jest.config.js
    │   ├── prettier.config.js
    │   ├── webpack.base.config.js
    │   └── webpack.prod.config.js
    │
    ├── node_modules
    │
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   └── manifest.json
    │
    ├── src
    │   ├── assets
    │   │   ├── styles
    │   │   |   └── UiKitStyles.css
    │   │   └── images
    │   │ 	  └── img.jpg
    │   │
    │   ├── components
    │   │	  └── HelloWorld
    │   │   ├── HelloWorld.scss
    │   │   ├── HelloWorld.jsx
    │   │   └── HelloWorld.test.jsx
    │   │
    │   ├── pages
    │   │   └── TestPage
    │   │   ├── TestPage.scss
    │   │   ├── TestPage.jsx
    │   │   └── TestPage.test.jsx
    │   │
    │   ├── shared
    │   │   └── ...
    │   │
    │   ├── utils
    │   │   └── ...
    │   │
    │   ├── models
    │   │   └── ...
    │   │
    │   └── index.jsx
    │
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintignore
    ├── .eslintrc.js
    ├── .gitignore
    │
    ├── package.json
    └── README.md

OK, let's start:

- **Build**: This folder is generated by executing the command `npm run prebuild` and contains the files to put in our server.
- **Config**: Here we found the config files for our project.
- **Node modules**: Well, all the code behind all the packages installed and used by node.js.
- **Public**: Here we have the template HTML file were all the compiled code will be injected.
- **Src**: Probably the most important folder of our project, here is were lives our code/app.
- **Assets**: This is the place to put in the images files and main styles for our app, AKA theme, or UIKIT in from the designers world.
- **Components**: No much explanation needed, here is were we will to put all of the components that form part of our app. Inside of this folder we found the individual folder for every single component.
- **HelloWorld**: Sample folder for our components.
- **Pages**: Here is were our container components lives.
- **Shared**: A directory that contains _standalone_ modules that could be exported from the project entirely.
- **Utils**: Like the packages folder, but the main difference is that all the code here is only used by the project and cannot be exported easily, for example every helper function o class written to apply the _DRY_ principle inside the app.
- **Models**: Here is were you put all the business logic models.

I think that would be enough to start a React,js project, of course i think it is not perfect, but it is a good beginning.

One last tip, if you are a beginner like me I recommend follow the [React.js official documentation](https://reactjs.org) , specially the section [thinking in React](https://reactjs.org/docs/thinking-in-react.html) to expand your mind. And if you want go beyond and you want your work partners and love yourself, i recommend you to learn about git commit best practices, here you have one interesting article: [How to write good commit messages](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/).

Well, that's it for now, if you see any improvement or fixes, I will be grateful and happy to receive your feedback.

And again, i hope you enjoy this material.

**Happy coding!!!**
