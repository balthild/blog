const macros = require('katex-physics');

const options = hexo.config.katex || {};
options.macros = Object.assign(options.macros || {}, macros);
hexo.config.katex = options;
