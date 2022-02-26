const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

  entry: path.resolve(__dirname, './react/index.js'),
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {

          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        }
      }, 
      {
        test: /\.(css|scss|sass)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        sideEffects: true
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name].[ext]'
        }
      }
    ]
  }, 
  resolve: {

    extensions: ['*', '.js', '.jsx']
  },
  output: {

    path: path.resolve(__dirname, 'public/dist/'),
    filename: 'bundle.js'
  },
  devServer: {

    static: path.resolve(__dirname, 'public'),
    open: true,
    hot: true
  },  
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ]
}