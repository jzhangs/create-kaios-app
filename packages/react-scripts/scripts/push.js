'use strict';

const path = require('path');
const paths = require('../config/paths');
const installToADB = require('install-to-adb');
const launchApp = require('node-firefox-launch-app');

const buildFolder = path.relative(process.cwd(), paths.appBuild);

installToADB(buildFolder)
  .then(res => {
    return launchApp({
      manifestURL: res[0].app.manifestURL,
      client: res[0].client,
    });
  })
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    console.log('fail to push app to device');
    process.exit(1);
  });
