const yaml = require('js-yaml');
const CleanCSS = require('clean-css');

const css = new CleanCSS().minify(`
.bookmarks {
    list-style: none;
    padding: 0;
    margin: 1em 0;
    display: flex;
    flex-flow: row wrap;
}

.bookmarks li {
    display: block;
    width: 50%;
}

.bookmarks li a {
    color: rgba(0, 0, 0, 0.7) !important;
    display: block;
    min-height: 64px;
    position: relative;
    box-sizing: content-box;
    padding: 12px 12px 12px 96px;
    border-radius: 2px;
}

.bookmarks li a:hover {
    background: rgba(0, 0, 0, 0.03);
}

.bookmarks li a img {
    width: 64px;
    height: 64px;
    border-radius: 32px;
    position: absolute;
    top: 12px;
    left: 12px;
}

.bookmarks li a h4 {
    margin: 8px 0 12px;
}

.bookmarks li a p {
    word-wrap: none;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

@media screen and (max-width: 600px) {
    .bookmarks li {
        width: 100%;
    }
}
`).styles;

hexo.extend.tag.register('bookmarks', function (args, content) {
    const doc = yaml.safeLoad(content);

    const items = doc.map(({ name, description, url, avatar }) => `
        <li>
            <a href="${url}" title="${name}" target="_blank">
                <img src="${avatar}" />
                <h4>${name}</h4>
                <p>${description}</p>
            </a>
        </li>
    `.trim()).join('');

    return `
        <style>${css}</style>
        <ul class="bookmarks">${items}</ul>
    `;
}, { ends: true });
