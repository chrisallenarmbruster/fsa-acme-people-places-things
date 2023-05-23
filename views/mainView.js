const wrapView = require("./viewWrapper.js")
const html = require("html-template-tag")

function mainView(content) {
  return wrapView(html`
    <div class="container">People</div>
    <div class="container">Places</div>
    <div class="container">Things</div>
  `)
}

module.exports = mainView
