const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000/api/v2/anime', // Backend API server
      changeOrigin: true,
    })
  );
};
