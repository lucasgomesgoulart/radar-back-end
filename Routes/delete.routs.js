const express = require('express')
const db = require('../conectando_db')
const { response } = require('express')

const deletar = express.Router()

deletar.delete('/:id', async(req,res)=>{
    const id = req.params.id
    const deletar = await db
    .deleteCustomer(id)
    .then()
    console.log(deletar);
    return res.status(204).send()
})

module.exports = deletar