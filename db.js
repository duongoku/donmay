const nedb = require('nedb');

const db = new nedb({
	filename: './donmay.db',
	autoload: true
});

const defaultData = [
	{ _id: 1, main: "1.Can the jargon score? "},
	{ _id: 2, main: "2.This referendum disappears against each acorn! "},
	{ _id: 3, main: "3.The episode moans above the go censorship. "},
	{ _id: 4, main: "4.Her scenario fields a circular mania. "},
	{ _id: 5, main: "5.The instinct trigger discriminates beside the isolate taxi. "},
	{ _id: 6, main: "6.The recovered anguish begs the accountant above each bull matrix. "},
	{ _id: 7, main: "7.My audience appears. "},
	{ _id: 8, main: "8.An assault volunteers without the satellite. "},
	{ _id: 9, main: "9.Near a researcher talks the brick. "},
	{ _id: 10, main: "10.The spread clearance slides beside the institute. "}
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
