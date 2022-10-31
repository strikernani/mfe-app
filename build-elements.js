const concat = require('concat');
(async function build() {
const files = [
'./dist/mfe-app/runtime.js',
'./dist/mfe-app/polyfills.js',
'./dist/mfe-app/main.js',
'./dist/mfe-app/styles.css'];
await concat(files, './dist/mfe-app/mfe-app.js')
})();