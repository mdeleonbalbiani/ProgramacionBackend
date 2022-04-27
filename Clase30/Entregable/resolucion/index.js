const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const cluster = require('cluster');

const app = express();

const User = require('./db/model');

const numCPUs = require('os').cpus().length;

/* -------------- Datos por CL -------------- */

const portCL = process.argv[2] || 3040;
const FACEBOOK_APP_ID = process.argv[3] || '1088323731578912';
const FACEBOOK_APP_SECRET = process.argv[4] || '00000000000000000';
const modoCluster = process.argv[5] == 'CLUSTER'


/* -------------- PASSPORT w FACEBOOK -------------- */
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

/* -------------------------------------------- */
/* MASTER */

if(modoCluster && cluster.isMaster) {
    // if Master, crea workers

    console.log(`Master ${process.pid} is running`);

    // fork workers
    for (let i=0; i<numCPUs; i++){
        cluster.fork()
    };

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // if !Master, alta al servidor + resto funcionalidades

    passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID, 
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'photos', 'emails'],
        scope: ['email']
    }, function(accessToken, refreshToken, profile, done) {
        let userProfile = profile;
    
        return done(null, userProfile);
    }));

    /* -------------- serialize + deserialize -------------- */
    passport.serializeUser(function(user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function(obj, cb) {
        cb(null, obj);
    });

    /* ------------------------------------ */
    /* CONFIG */
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.use(cookieParser());
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        rolling: true,
        cookie: {
            maxAge: 60000
        }
    }));


    app.engine(
        "hbs", 
        handlebars({
            extname: ".hbs",
            defaultLayout: 'index.hbs',
        })
    );


    app.set("view engine", "hbs");
    app.set("views", "./views");

    app.use(express.static('public'));
    app.use(passport.initialize());
    app.use(passport.session());

    /* -------------- LOGIN -------------- */
    app.get('/login', (req, res)=>{
        if(req.isAuthenticated()){
            res.render("welcome", {
                nombre: req.user.displayName,
                foto: req.user.photos[0].value,
                email: req.user.emails[0].value,
                contador: req.user.contador
            })
        }
        else {
            res.sendFile(process.cwd() + '/public/login.html')
        }
    })

    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback', passport.authenticate('facebook',
        {
            successRedirect: '/welcome',
            failureRedirect: '/faillogin'
        }
    ));

    app.get('/welcome', (req, res) => {
        res.redirect('/');
    });

    app.get('/faillogin', (req, res) => {
        res.render('login-error', {});
    });

    app.get('/logout', (req, res)=>{
        let nombre = req.user.displayName;
        req.logout();
        res.render("logout", { nombre })
    });

    /* -------------- GLOBAL PROCESS & CHILD PROCESS -------------- */

    // PROCESS
    app.get('/info', (req, res) => {
        res.render("info", {
            argEntrada: JSON.stringify(process.argv, null, '\t'), 
            os: process.platform, 
            nodeVs: process.version, 
            memoryUsage: JSON.stringify(process.memoryUsage()), 
            excPath: process.execPath, 
            processID: process.pid, 
            folder: process.cwd(),
            numCPUs
        });
    });

    // CHILD PROCESS
    const {fork} = require('child_process');

    // /randoms?cant=20000
    app.get('/randoms', (req, res) => {
        try{
            const randomNumber = fork('./child.js');
            randomNumber.send(req.query)
            randomNumber.on('message', numerosRandom => {
                res.end(`Numeros random ${JSON.stringify(numerosRandom)}`);
            });
        } catch (err) {
            console.log(err);
        }  
    });

    /* -------------- DB CONNECTION -------------- */

    app.listen(portCL, ()=>{
        console.log(`Running on PORT ${portCL}- 4 ended up 3rd`);
        mongoose.connect('mongodb://localhost:27017/ecommerce', 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true
            }
        )
            .then( () => console.log('Base de datos conectada') )
            .catch( (err) => console.log(err) );
    })

    console.log(`Worker ${process.pid} started`);
};
