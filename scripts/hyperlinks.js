const linkifyHtml = require("linkifyjs/html");

const sep = ":/.,@+$?&=#%".split("").map(c => "\\" + c).join("");
const reg = new RegExp(`([${sep}]+)`, "g");

hexo.extend.filter.register("after_post_render", function (data) {
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
