const baseConfig = require("@klaudia-z/common-js-config/webpack/webpack.base.config");
const path = require("path");

const APP_DIR = path.resolve(__dirname, "../src");

module.exports = env => baseConfig(env, APP_DIR);
