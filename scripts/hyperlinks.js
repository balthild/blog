const linkifyHtml = require("linkifyjs/html");

hexo.extend.filter.register("after_post_render", function (data) {
    const sep = Array.from(":/.@+$?&=#%");
    const reg = new RegExp(`([${sep.map(c => `\\${c}`)}]+)`, "g");

    data.content = linkifyHtml(data.content, {
        format(value) {
            return value.split(reg).join("<wbr>");
        },
        target(href, type) {
            if (type === "url") {
                const url = href.toLowerCase();

                if (url.includes("://balthild.com") || url.includes("://qaq.cat")) {
                    return "_self";
                }
            }

            return "_blank";
        },
    });

    return data;
});
