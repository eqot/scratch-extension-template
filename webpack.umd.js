const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const outDir = path.resolve(__dirname, 'dist/umd');

module.exports = merge(common, {
  output: {
    path: outDir,
    filename: 'index.js',
    libraryTarget: 'umd',
  },
});
