"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPost = renderPost;
const skiblog_core_1 = require("skiblog-core");
const { getPostTitle, getPostBlocks, isH, isP, isDemo, getHText, getPText, getDemoId } = skiblog_core_1.ke.don.core;
function renderPost(post) {
    const title = getPostTitle(post);
    const blocks = getPostBlocks(post);
    let html = `<h1>${title}</h1>\n`;
    blocks.forEach(block => {
        if (isH(block)) {
            html += `<h2>${getHText(block)}</h2>\n`;
        }
        else if (isP(block)) {
            html += `<p>${getPText(block)}</p>\n`;
        }
        else if (isDemo(block)) {
            html += `<div class="demo" id="${getDemoId(block)}">Demo: ${getDemoId(block)}</div>\n`;
        }
    });
    return html;
}
