'use strict';
module.exports = function (req, res, next) {
	req.uac = require('./../uac')
	next()
}