# create-kaios-app

This package includes the global command for [Create KaiOS App](https://github.com/kaios-design/create-kaios-app).

It is forked from [Create React App](https://github.com/facebook/create-react-app). Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

### Modifications

This package only renames `create-react-app` to `create-kaios-app` and downloads `kaios-scripts` instead of `react-scripts`.

### Create and Install

To create and install app to a KaiOS device is as simple as below:

```
yarn create kaios-app my-app
cd my-app && yarn build
yarn push
```

The default template is written in pure javascript. You may also create a react app by,

```
yarn create kaios-app my-app --react
```
