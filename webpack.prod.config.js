const path = require('path')

module.exports = {
  entry:[
    './client/index'
  ],
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist'),
    publicPath:'/static/',
  },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        loaders:['babel?presets[]=react,presets[]=es2015']
      },
      {
        test:/\.scss$/,
        loaders:['style','css'],
        include: path.join(__dirname, './client/styles')
      },
    ]
  },
  resolve:{
    extensions:['', '.js']
  }
}
