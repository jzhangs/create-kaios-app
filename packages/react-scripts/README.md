# kaios-scripts

This package includes scripts and configuration used by [Create KaiOS App](https://github.com/kaios-design/create-kaios-app).

It is forked from react-scripts that used by [Create React App](https://github.com/facebook/create-react-app). Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

## Modifications

Template app and some util scripts are modified from react-scripts.

### Template

The template shows KaiOS logo, including `icons/` for launcher icons and [manifest.webapp](https://developer.kaiostech.com/first-app/manifest) following B2G OS style. (Slightly different from previous manifest.json)

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── icons/
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

### Yarn

The `yarn push` script helps to install app built to KaiOS devices.

Please run `adb devices` and `adb root` to make sure there's device attached and adbd is running as root.
