const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routesUsers = require('./routes/users');
const routesMembers = require('./routes/members');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());
// enable cors for all requests
app.use(cors());
app.use('/users', routesUsers);
app.use('/members', routesMembers);

// connect to mongoDB - sollte  process.env.DB_CONNECTION,'mongodb://127.0.0.1:27017/members',
mongoose.connect( process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to DB');
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server started and listening on port ${PORT} ... `);
  }
});
