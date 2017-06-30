const nedb = require('nedb');

const db = new nedb({
	filename: './donmay.db',
	autoload: true
});

const fs = require('fs');
const p1 = fs.readFileSync('paragraphs/p1.txt', 'utf-8');
const p2 = fs.readFileSync('paragraphs/p2.txt', 'utf-8');
const p3 = fs.readFileSync('paragraphs/p3.txt', 'utf-8');
const q1 = fs.readFileSync('questions/q1.txt', 'utf-8');
const q2 = fs.readFileSync('questions/q2.txt', 'utf-8');
const q3 = fs.readFileSync('questions/q3.txt', 'utf-8');

const defaultData = [
	{ _id: 1, main: p1, question: q1},
	{ _id: 2, main: p2, question: q2},
	{ _id: 3, main: p3, question: q3}
	// { _id: 4, main: ""},
	// { _id: 5, main: ""},
	// { _id: 6, main: ""},
	// { _id: 7, main: ""},
	// { _id: 8, main: ""},
	// { _id: 9, main: ""},
	// { _id: 10, main: ""}
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
			callback(null, {main: rows[0].main, question: rows[0].question});
	});
}

module.exports = {
	get: getParagraph
}
