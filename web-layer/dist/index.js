"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preview = preview;
const renderer_js_1 = require("./renderer.js");
// This is just a demonstration of usage. 
// In a real scenario, you'd get the 'post' object from the Kotlin/JS library.
function preview(post) {
    console.log("Rendering post...");
    const html = (0, renderer_js_1.renderPost)(post);
    console.log(html);
}
