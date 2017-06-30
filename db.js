const nedb = require('nedb');

const db = new nedb({
	filename: './donmay.db',
	autoload: true
});

const fs = require('fs');
const p1 = fs.readFileSync('paragraphs/p1.txt', 'utf-8');
const p2 = fs.readFileSync('paragraphs/p2.txt', 'utf-8');
const p3 = fs.readFileSync('paragraphs/p3.txt', 'utf-8');

const defaultData = [
	{ _id: 1, main: p1},
	{ _id: 2, main: p2},
	{ _id: 3, main: p3},
	{ _id: 4, main: ""},
	{ _id: 5, main: ""},
	{ _id: 6, main: ""},
	{ _id: 7, main: ""},
	{ _id: 8, main: ""},
	{ _id: 9, main: ""},
	{ _id: 10, main: ""}
];

db.count({}, (err, count) => {
	if (count === 0) {
		db.insert(defaultData);
	}
});

function getParagraph(id, callback) {
	db.find({ _id: id }, (err, rows) => {
		if (rows.length === 0)
			callback(new Error("No paragraph found"), null);
		else
			callback(null, {main: rows[0].main});
	});
}

module.exports = {
	get: getParagraph
}
