// ------------------------------------- SERVER CONFIG -------------------------------------- //

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 4002;

// ---------------------------------------- DATABASE ---------------------------------------- //

const db = require('./models');

// ---------------------------------------- ROUTES ---------------------------------------- //

const routes = require('./routes');

// --------------------------------------- MIDDLEWARE --------------------------------------- //

// serve Public directory
app.use(express.static(`${__dirname}/public`));

// BodyParser - Make Request Data Avaialble on req.body
app.use(bodyParser.json());

// get url encoded queries & params
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieParser());

// -------------------------------------- HTML ROUTES --------------------------------------- //

app.use('/', routes.views);

// -------------------------------------- API ROUTES ---------------------------------------- //

app.use('/api/v1/', routes.api);

// -------------------------------------- START SERVER -------------------------------------- //

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
