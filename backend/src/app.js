require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');           // models folder inside src
const taskRoutes = require('./routes/tasks'); // routes folder inside src

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:4200' })); 
app.use(bodyParser.json());

// Routes
app.use('/tasks', taskRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Task Manager API is running ✅');
});

// Sync database and start server
db.sequelize.sync()
  .then(() => {
    console.log('Database synced ✅');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
