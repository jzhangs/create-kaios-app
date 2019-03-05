# Create KaiOS App

Forked from [facebook/create-react-app](https://github.com/facebook/create-react-app), Create KaiOS App helps to build a [KaiOS](https://www.kaiostech.com/) app quickly based on react and kaios designed ui components. You may need a KaiOS device such as `Nokia 8810 4G`(debug enabled) or a [KaiOS Simulator](https://developer.kaiostech.com/simulator) to check specific app behaviors, though Firefox Browser is also a good choice.

Original README is renamed [README_React.md](README_React.md), check it for more details.

## Creating an App

**You’ll need to have Node 8.10.0 or later on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

We recommend using yarn to create kaios app, though npx and npm should also work.

### Yarn

```sh
yarn create kaios-app my-app
```

_`yarn create` is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── icons
│   ├── index.html
│   └── manifest.webapp
└── src
    ├── view
    |   |── app.css
    |   ├── app.js
    |   ├── app.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
```

No configuration or complicated folder structures, just the files you need to build your app. Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `yarn start`

Runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `yarn test`

Runs the test watcher in an interactive mode.

By default, runs tests related to files changed since the last commit. [Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed.

### `yarn push`

Push and install the app to device or simulator.

## User Guide

You can find detailed instructions on using Create React App and many tips in [its documentation](https://facebook.github.io/create-react-app/). For KaiOS app development, check [its developer portal](https://developer.kaiostech.com/).
