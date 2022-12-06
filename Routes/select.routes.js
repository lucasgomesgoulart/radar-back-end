const express = require('express')
const db = require('../conectando_db')
const select = express.Router()

select.get('/', async (req,res)=>{
    const listUsers = await db.selectCustomers().then()
    res.json(listUsers)
})

module.exports = select