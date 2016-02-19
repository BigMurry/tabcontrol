const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool:'cheap-module-eval-source-map',
  entry:[
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    './client/index'
  ],
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist'),
    publicPath:'/static/',
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        loaders:['babel?presets[]=react,presets[]=es2015']
      },
      {
        test:/\.scss$/,
        loaders:['style', 'css'],
        include: path.join(__dirname, './client/styles')
      },
    ]
  },
  resolve:{
    extensions:['', '.js']
  }
}
