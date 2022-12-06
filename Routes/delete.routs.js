const express = require('express')
const db = require('../conectando_db')

const deletar = express.Router()

deletar.delete('/:id', async(req,res)=>{
    const id = req.params.id
    const deletar = await db
    .deleteCustomer(id)
    .then()
    console.log(deletar);
})

module.exports = deletar