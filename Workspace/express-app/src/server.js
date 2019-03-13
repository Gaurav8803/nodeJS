console.log('app started');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const { EventEmitter } = require('events');
const cors = require('cors');
//require routes & repos here
const employeeRoutes = require('./api/employee');
const empRepo = require('./repository/employee');
const userRoutes = require('./api/user-api');
const userRepo = require('./repository/user-repo');
const { demo } = require('./middlewares/demo');
//listen to db events here
const mediator = new EventEmitter();
//requiiring db config file
require('./config/db')(mediator);
mediator.once('db.ready', () => {
    // app confighuration here
    console.log('-------starting server--------');
    const app = express();
    // app.use(12345@gmail.com);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan('dev'));
    app.use(cors());
    app.use(helmet());


    //routes here
    employeeRoutes(app, empRepo);
    userRoutes(app, userRepo);

    //server start here
    app.listen(3000, (err) => {
        if(err) throw err;
        console.log('app started on http://localhost:3000');
    });
});

mediator.once('db.error', (err) => {
    console.log('failed to connect to db, shutting down the server');
});


