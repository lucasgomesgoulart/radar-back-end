const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./Routes/routes.js')

dotenv.config({ path: './config/config.env' })

const server = express()
const port = process.env.PORT || 5000

server.listen(
    port,
    console.log(`Servidor rodando em ${process.env.NODE_ENV} na porta ${port}`),
    async () => {
        const db = require('./conectando_db')
        console.log('Começou!')

        // Buscando todos os usuarios da tabela USERS
        const client = await db.selectCustomers()
        console.log(client)


        // Deletar
        // const deletar = await db.deleteCustomer(1)
        // console.log(deletar)
        server.use(routes)
    }
)

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
