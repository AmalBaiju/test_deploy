const express = require("express");
const app = express();
const ejs = require('ejs')
const mongoose = require('mongoose')
const flash = require('connect-flash');
const expressSession = require('express-session');
const dashboard = require('./controllers/dashboard')
const g = require('./controllers/g')
const g2 = require('./controllers/g2')
const g2Save = require('./controllers/g2Save')
const login = require('./controllers/login')
const gid = require('./controllers/gid')
const g2update = require('./controllers/g2update')
const g2create = require('./controllers/g2create')
const gfind = require('./controllers/gfind')
const loginverify = require('./controllers/loginverify')
const signup = require('./controllers/signup')
const logoutController = require('./controllers/logout')
const g2Appointment = require('./controllers/g2Appointment');

const appointment= require('./controllers/appointment')
const appointmentCreateController = require('./controllers/appointmentCreate')

const redirectAuthenticationMiddleware = require('./middleware/redirectAuthenticationMiddleware');
const authMiddleware = require('./middleware/authMiddleware');


mongoose.connect('mongodb+srv://amalbaiju21:test@cluster0.cuameze.mongodb.net/drivetestdb?retryWrites=true&w=majority', { useNewUrlParser: true })


app.set('view engine', 'ejs')
app.use(express.static('public'))
const G2 = require('./models/G2')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(4000, () => {
  console.log("App listening on port 4000");
});

app.use(expressSession({
  secret: 'secret key for session',
  resave: false,
  saveUninitialized: true
}))

app.use('*', (req, res, next) => {
    userId = req.session.userId;
    userType = req.session.userType;
    next()
})

app.use(flash());
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success');
  res.locals.error_messages = req.flash('error');
  next();
});

app.get('/', dashboard)
app.get('/g', authMiddleware, g)
app.get('/g2', authMiddleware, g2)
app.post('/login', loginverify)
app.get('/login', redirectAuthenticationMiddleware, login)
app.post('/g2/save', g2Save)
app.post('/g2/update', g2update)
app.post('/signup', signup)
app.get('/auth/logout',logoutController)
app.get('/appointments', appointment)
app.post('/appointments/create', appointmentCreateController)
app.post('/appointments/g2Appointment', g2Appointment);

//Commented out for now as no longer needed
// app.post("/g2/create", g2create);
// app.get('/g/:id', gid)
// app.post('/g/find', gfind)