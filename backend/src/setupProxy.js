const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000', // Your backend API
      changeOrigin: true,
      pathRewrite: { '^/api': '' }, // Strips '/api' from the request path
    })
  );
};
