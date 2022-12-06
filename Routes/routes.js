const express = require('express')
const insert = require('./insert.routes.js')
const update = require('./update.routes.js')
const deletar = require('./delete.routs.js')
const select = require('./select.routes.js')
const router = express.Router()

router.use('/insert', insert)
router.use('/update', update)
router.use('/deletar', deletar)
router.use('/select', select)

module.exports = router