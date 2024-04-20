const pathsPublic = require("../paths.js");

const indexPage = (req, res) => {
  res.sendFile(pathsPublic.index);
};

const loginPage = (req, res) => {
     res.sendFile(pathsPublic.login);
}
const ajudaPage = (req, res) => {
     res.sendFile(pathsPublic.ajuda);
}
const contatoPage = (req, res) => {
     res.sendFile(pathsPublic.contato);
}
const faqPage = (req, res) => {
     res.sendFile(pathsPublic.faq);
}
const recursosPage = (req, res) => {
     res.sendFile(pathsPublic.recursos);
}
const sobrePage = (req, res) => {
     res.sendFile(pathsPublic.sobre);
}

module.exports = {
     indexPage,
     loginPage,
     ajudaPage,
     contatoPage,
     faqPage,
     recursosPage,
     sobrePage
}