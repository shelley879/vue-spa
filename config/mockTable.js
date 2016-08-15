module.exports = {
  "/api/localTest" : {
      type : 'local',
      target: '../mock/localTest'
  },
  "/api/**" : {
      type : 'proxy',
      target: 'http://125.97.251.7:8097/',
      pathRewrite: {
          '^/api' : '/'
      }
  }
};