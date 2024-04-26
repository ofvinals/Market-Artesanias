const { Router } = require('express');
const loginNormal = require('../../Handlers/HandlerLoginNormal/HandlerLoginNormal');

const routerLoginNormal = Router();

routerLoginNormal.post('/', loginNormal);

module.exports = routerLoginNormal;
