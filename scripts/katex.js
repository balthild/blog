"use strict";

const util = require("hexo-util");
const katex = require("katex");
const physics = require("katex-physics");
const { JSDOM } = require("jsdom");

hexo.extend.filter.register("after_render:html", function (result, data) {
    const doc = new JSDOM(result).window.document;

    if (doc.querySelectorAll(".math").length > 0) {
        const linkTag = util.htmlTag("link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css",
            integrity: "sha256-pJEAs/zQ2ihefvJlQEQkjHX+H1br8xxfQ2RXWjJtZmE=",
            crossorigin: "anonymous",
        });
        
        return result.replace("</head>", `${linkTag}</head>`);
    }

    return result;
});

hexo.extend.filter.register("after_post_render", function (data) {
    const doc = new JSDOM(data.content).window.document;

    const inlineExprs = Array.from(doc.querySelectorAll(".math.inline"));
    for (const el of inlineExprs) {
        el.innerHTML = katex.renderToString(el.textContent, {
            macros: physics,
            throwOnError: false,
            displayMode: false,
        });
    }

    const displayExprs = Array.from(doc.querySelectorAll(".math.display"));
    for (const el of displayExprs) {
        el.innerHTML = katex.renderToString(el.textContent, {
            macros: physics,
            throwOnError: false,
            displayMode: true,
        });
    }

    data.content = doc.head.innerHTML + doc.body.innerHTML;

    return data;
})
