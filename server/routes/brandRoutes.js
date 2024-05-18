const Router = require('express')
const router = new Router()
const brand = require('../controllers/brandController')
const brandController = require('../controllers/brandController')

router.post('/', brandController.create)
router.get('/', brandController.getAll)


module.exports = router