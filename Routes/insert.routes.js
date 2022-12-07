const { response } = require('express')
const express = require('express')
const db = require('../conectando_db')
const insert = express.Router()

insert.post('/', async (req, res) => {
    const { name, sex, datebirthday, phone, email } = req.body
    const insert = await db
        .insertCustomer({ name: name, sex: sex, datebirthday: datebirthday, phone: phone, email: email })
        .then()
    console.log(insert);
    return res.send({
        name: name, sex: sex, datebirthday: datebirthday, phone: phone, email: email
    })
})

module.exports = insert