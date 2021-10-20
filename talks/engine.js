// Destructuring assignment; we also export UI messages & media type detection
const { html5Media } = require('markdown-it-html5-media');

module.exports = ({ marp }) => marp.use(html5Media)