// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:5005',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/bridge', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
};