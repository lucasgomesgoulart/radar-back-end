const express = require('express')
const db = require('../conectando_db')

const update = express.Router()

update.put('/:id', async (req, res) => {
    const { name, sex, datebirthday, phone, email } = req.body
    const id = req.params.id

    const update = await db
        .updateCustomer(id, { name: name, sex: sex, datebirthday: datebirthday, phone: phone, email: email })
        .then()
    console.log(update);
})

module.exports = update