var path = require('path')
var fs = require('fs');
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context];
  if(context.lastIndexOf('*') !== -1 && ((context.lastIndexOf('*') + 1) < context.length)){
    throw new Error(context +":星号只能放到最后一位");
  }

  if (typeof options.target === 'string' && options.type === 'proxy') {
    app.use(proxyMiddleware(context, options))
  }
  if (typeof options.target === 'string' && options.type === 'local') {
    setLocalRoute(context,options);
  }

})

//设置mock路由
function setLocalRoute(context,options) {
  function routeFun (jsonFile){
    return function(req,res) {
      if(fs.existsSync(path.join(__dirname,options.target)))
        res.send(fs.readFileSync(path.join(__dirname,options.target,jsonFile), {encoding  : 'utf-8'}));
      else{
        res.status(404);
        res.send('404');
      }
    }
  }
  //get
  if(fs.existsSync(path.join(__dirname,options.target,'get.json'))){
    app.get(context,routeFun('get.json'));
  }
  //post
  if(fs.existsSync(path.join(__dirname,options.target,'post.json'))){
    app.post(context,routeFun('post.json'));
  }
  //put
  if(fs.existsSync(path.join(__dirname,options.target,'put.json'))){
    app.put(context,routeFun('put.json'));
  }
  //delete
  if(fs.existsSync(path.join(__dirname,options.target,'delete.json'))){
    app.delete(context,routeFun('delete.json'));
  }
}

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
