const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
  mode: 'development',
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname, "dist"),
    filename:"bundle.js",
    publicPath:"dist/"
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: ['style-loader','css-loader'] 
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit:13000,
              name:"img/[name][hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader:'vue-loader'
        }
      }
    ]
  },
  plugins: [
    // make sure reference this plugin
    new VueLoaderPlugin()
  ],
  resolve:{
    extensions:['.js', '.vue', ".css"],
    alias:{
      "vue$" : "vue/dist/vue.esm.js"
    }
    
  }
}