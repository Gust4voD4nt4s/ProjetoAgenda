const express = require('express')
const path = require('path')
const app = express()
const homeRouter = require(path.resolve(__dirname, 'src', 'routes', 'route'))
const viewPagina = path.resolve(__dirname, 'src', 'views')
const port = 3000

app.use('/home', homeRouter)

app.set('views', viewPagina)
app.set('view engine', 'ejs')


app.listen(port, () => {
    console.log("http://localhost:3000/home/")
    console.log(`Servidor conectado na porta ${port}`)
})