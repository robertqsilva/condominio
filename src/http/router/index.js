const { Router } = require('express');
const routerPublicPage = require('./publicRouter')
const router = Router()


router.use(routerPublicPage)

module.exports = router