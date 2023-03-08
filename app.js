require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash');
const helmet = require('helmet')
const csrf = require('csurf')
const middlewares = require('./src/middlewares/middleware')
const routes = require(path.resolve(__dirname, 'route'))
const viewPagina = path.resolve(__dirname, 'src', 'views')
const port = 3000

mongoose.connect(process.env.CONNECTMONGO)
.then( () => {
  console.log('Connected database'),
  app.emit('Connected database')
})
.catch(e => console.log(e))

app.use(helmet())
app.use(express.urlencoded({extended:true}))


const sessionOptions = session({
    secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
    
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', viewPagina)
app.set('view engine', 'ejs')

app.use(csrf())
app.use(middlewares.checkCsrfError)
app.use(middlewares.csrfMiddleware)
app.use(routes)

app.on('Connected database', () => {
  app.listen(3000, () => {
    console.log("http://localhost:3000/home/")
    console.log(`Server connected to port ${port}`)
  })
})
