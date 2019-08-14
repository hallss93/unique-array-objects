'use strict';
module.exports = (arr) => {
	return arr.reduce(function (p, c) {
		let key = ''
		let keys = []
		for (var i in c) {
			keys.push(c[i])
		}
		key = [keys].join('|');
		if (p.temp.indexOf(key) === -1) {
			p.out.push(c);
			p.temp.push(key);
		}
		return p;
	}, {
		temp: [],
		out: []
	}).out;
}