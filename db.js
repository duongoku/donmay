const nedb = require('nedb');

const db = new nedb({
	filename: './donmay.db',
	autoload: true
});

const fs = require('fs');
const p1 = fs.readFileSync('paragraphs/p1.html', 'utf-8');
const p2 = fs.readFileSync('paragraphs/p2.html', 'utf-8');
const p3 = fs.readFileSync('paragraphs/p3.html', 'utf-8');
const p4 = fs.readFileSync('paragraphs/p4.html', 'utf-8');
const p5 = fs.readFileSync('paragraphs/p5.html', 'utf-8');
const p6 = fs.readFileSync('paragraphs/p6.html', 'utf-8');
const p7 = fs.readFileSync('paragraphs/p7.html', 'utf-8');
const p8 = fs.readFileSync('paragraphs/p8.html', 'utf-8');
const p9 = fs.readFileSync('paragraphs/p9.html', 'utf-8');
const p10 = fs.readFileSync('paragraphs/p10.html', 'utf-8');
const p11 = fs.readFileSync('paragraphs/p11.html', 'utf-8');
const p12 = fs.readFileSync('paragraphs/p12.html', 'utf-8');
const p13 = fs.readFileSync('paragraphs/p13.html', 'utf-8');
const p14 = fs.readFileSync('paragraphs/p14.html', 'utf-8');
const p15 = fs.readFileSync('paragraphs/p15.html', 'utf-8');
const p16 = fs.readFileSync('paragraphs/p16.html', 'utf-8');
const p17 = fs.readFileSync('paragraphs/p17.html', 'utf-8');
const p18 = fs.readFileSync('paragraphs/p18.html', 'utf-8');
const p19 = fs.readFileSync('paragraphs/p19.html', 'utf-8');
const p20 = fs.readFileSync('paragraphs/p20.html', 'utf-8');
const p21 = fs.readFileSync('paragraphs/p21.html', 'utf-8');
const p22 = fs.readFileSync('paragraphs/p22.html', 'utf-8');
const p23 = fs.readFileSync('paragraphs/p23.html', 'utf-8');
const p24 = fs.readFileSync('paragraphs/p24.html', 'utf-8');
const p25 = fs.readFileSync('paragraphs/p25.html', 'utf-8');
const p26 = fs.readFileSync('paragraphs/p26.html', 'utf-8');
const p27 = fs.readFileSync('paragraphs/p27.html', 'utf-8');
const p28 = fs.readFileSync('paragraphs/p28.html', 'utf-8');
const p29 = fs.readFileSync('paragraphs/p29.html', 'utf-8');
const p30 = fs.readFileSync('paragraphs/p30.html', 'utf-8');
const q1 = fs.readFileSync('questions/q1.txt', 'utf-8');
const q2 = fs.readFileSync('questions/q2.txt', 'utf-8');
const q3 = fs.readFileSync('questions/q3.txt', 'utf-8');
const q4 = fs.readFileSync('questions/q4.txt', 'utf-8');
const q5 = fs.readFileSync('questions/q5.txt', 'utf-8');
const q6 = fs.readFileSync('questions/q6.txt', 'utf-8');
const q7 = fs.readFileSync('questions/q7.txt', 'utf-8');
const q8 = fs.readFileSync('questions/q8.txt', 'utf-8');
const q9 = fs.readFileSync('questions/q9.txt', 'utf-8');
const q10 = fs.readFileSync('questions/q10.txt', 'utf-8');

const defaultData = [
	{ _id: 1, main: p1, question: q1},
	{ _id: 2, main: p2, question: q1},
	{ _id: 3, main: p3, question: q1},
	{ _id: 4, main: p4, question: q2},
	{ _id: 5, main: p5, question: q2},
	{ _id: 6, main: p6, question: q2},
	{ _id: 7, main: p7, question: q3},
	{ _id: 8, main: p8, question: q3},
	{ _id: 9, main: p9, question: q3},
	{ _id: 10, main: p10, question: q4},
	{ _id: 11, main: p11, question: q4},
	{ _id: 12, main: p12, question: q4},
	{ _id: 13, main: p13, question: q5},
	{ _id: 14, main: p14, question: q5},
	{ _id: 15, main: p15, question: q5},
	{ _id: 16, main: p16, question: q6},
	{ _id: 17, main: p17, question: q6},
	{ _id: 18, main: p18, question: q6},
	{ _id: 19, main: p19, question: q7},
	{ _id: 20, main: p20, question: q7},
	{ _id: 21, main: p21, question: q7},
	{ _id: 22, main: p22, question: q8},
	{ _id: 23, main: p23, question: q8},
	{ _id: 24, main: p24, question: q8},
	{ _id: 25, main: p25, question: q9},
	{ _id: 26, main: p26, question: q9},
	{ _id: 27, main: p27, question: q9},
	{ _id: 28, main: p28, question: q10},
	{ _id: 29, main: p29, question: q10},
	{ _id: 30, main: p30, question: q10}
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
