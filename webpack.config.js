const path = require('path');
module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    context: __dirname,
    target: 'web',
    devtool: 'source-map',

    // Config for `webpack-dev-server`. The dev server provides the client code at localhost:8081. It will automatically
    // refresh the browser page when you modify client files.
    devServer: {
        port: 8082,
        overlay: true,
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        // If URI request fails, just send it through to `index.html`
        historyApiFallback: true,
        host: '0.0.0.0'
    },

    // Turn off plugins that are auto-included by default in production mode
    optimization: {
        minimize: false,
        concatenateModules: false
    }
};
