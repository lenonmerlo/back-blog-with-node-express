const express = require('express')
const exp = require('node:constants')
const path = require('node:path')
const router = require('./routes')

const app = express()

//Configuração do EJA
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuraçao de arquivos estaticos
app.use(express.static('public'))

// Configuracao para ler dados da requisicao
app.use(express.urlencoded({ extended: true }))

// confiracao da rota
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}`))