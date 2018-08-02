const express = require('express'),
  bodyParser = require('body-parser'),
  configFile = require('../config')

module.exports = function(app) {
  app.get('/api/*', (req, res) => {
    res.json({'error': 'Endpoint not found'});
  })
}
