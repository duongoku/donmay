const nedb = require('nedb');

const db = new nedb({
	filename: './donmay.db',
	autoload: true
});

const defaultData = [
	{ _id: 1, main: "Can the jargon score? "},
	{ _id: 2, main: "This referendum disappears against each acorn! "},
	{ _id: 3, main: "The episode moans above the go censorship. "},
	{ _id: 4, main: "Her scenario fields a circular mania. "},
	{ _id: 5, main: "The instinct trigger discriminates beside the isolate taxi. "},
	{ _id: 6, main: "The recovered anguish begs the accountant above each bull matrix. "},
	{ _id: 7, main: "My audience appears. "},
	{ _id: 8, main: "An assault volunteers without the satellite. "},
	{ _id: 9, main: "Near a researcher talks the brick. "},
	{ _id: 10, main: "The spread clearance slides beside the institute. "}
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
