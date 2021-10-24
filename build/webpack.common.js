const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {     
    rules: [
      {         
        test: /\.m?js$/,         
        exclude: /node_modules/,         
        use: {           
          loader: "babel-loader",
            options: {             
            presets: ['@babel/preset-env']          
          }
        }       
      }     
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Title',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
};
