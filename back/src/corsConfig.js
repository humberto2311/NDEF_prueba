const cors = require('cors');

const corsConfig = cors({
  origin: '*',
  credentials: false,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

module.exports = corsConfig;
