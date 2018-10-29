const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = (env) => {
  const istProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

  console.log('env: ', env);
return { entry: './src/app.js',
    // entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: CSSExtract.extract({
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            })
        }]
    },
    plugins: [
        CSSExtract
    ],
    devtool: istProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        // this has been added after
        historyApiFallback: true

    }}
};
