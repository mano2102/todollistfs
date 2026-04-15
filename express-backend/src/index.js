const app = require('./app');
const { testConnection } = require('./config/database');

const PORT = process.env.PORT || 3000;

// Test DB connection on startup
testConnection();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
