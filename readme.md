# NPM Versions

Simple way to get a quick reference of the top 6 downloads by version of the last 7 days.
Taken from the versions tab of an npm package.

![Screenshot](./screenshot.png)

## Instructions

 * go to: https://www.npmjs.com/package/react?activeTab=versions
 * open console and copy `window.__context__` object
 * save to json file
 * replace this line `parse("./example.json");` in stats.js
 * open terminal
 * run `npm run stats`
 * open index.html
 