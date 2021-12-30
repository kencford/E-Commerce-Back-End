const express = require('express');
const routes = require('./routes');

// import sequelize connection
//******************************* */
//added by ken
const sequelize = require('./config/connection');
//******************************* */

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

//essential for getting individual record ... specifying id
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

// turn on connection to db and server
//******************* */
//added by ken
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

//******************** */
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
