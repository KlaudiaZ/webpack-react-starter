const prodConfig = require("@klaudia-z/common-js-config/webpack/webpack.prod.config");
const path = require("path");

const APP_DIR = path.resolve(__dirname, "../src");

module.exports = env => prodConfig(env, APP_DIR);
