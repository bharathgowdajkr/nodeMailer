const express = require('express')
const router = express.Router()
let emailController = require('./controller')


router.post('/sendmail', (req, res) => {
    emailController.eMail(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

module.exports = router