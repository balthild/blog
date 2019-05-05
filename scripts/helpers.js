const { JSDOM } = require("jsdom");

hexo.extend.helper.register("summarize", function (content) {
    const doc = new JSDOM(content).window.document;

    while (doc.body.children.length > 5) {
        doc.body.removeChild(doc.body.lastChild);
    }

    return doc.head.innerHTML + doc.body.innerHTML;
});
