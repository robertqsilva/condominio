const { Router } = require('express');
const publicControllers = require('../controllers/publicControllers')

const router = Router()

router.get("/", publicControllers.indexPage);
router.get("/login", publicControllers.loginPage);
router.get("/ajuda", publicControllers.ajudaPage);
router.get("/contato", publicControllers.contatoPage);
router.get("/faq", publicControllers.faqPage);
router.get("/recursos", publicControllers.recursosPage);
router.get("/sobre", publicControllers.sobrePage);

module.exports = router