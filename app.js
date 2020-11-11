
const express = require('express')
const chalk = require('chalk')
const hbs = require("hbs")


const app = express()
const PORT = 3000


//1. Indicamos a nuestro servidor dónde está la carpeta de vistas (views)
app.set("views", __dirname + "/views")

//2. Indicamos a nuestro servidor que el motor de vistas que vamos a utilizar es hbs
app.set("view engine", "hbs")



app.get('/', (req, res, next)=>{

  const outsiderShoppingCart = [
    'Palo de golf', 
    'Zapatillas de montaña',
    'Libro de literatura',
    'Calcetines',
    'Juego para la PS5',
    'Poster de anime'
  ]

  const userInfo = {
    name: 'Pedro',
    lastName: 'Caceres',
    age: 19,
    alive: true,
    shoppingCart: outsiderShoppingCart,
    numberOfItems: outsiderShoppingCart.length,
    favoriteBook: {
      name: 'El niño con el pijama de rayas',
      author: 'Michelle González',
      year: 2007
    }
  }

  res.render('index', userInfo)
})

app.get('/about', (req, res, next)=>{
  res.render('about')
})


app.listen(PORT, ()=>{
  console.log(chalk.green.inverse.bold(`Server listening in Port ${PORT}`))
})


