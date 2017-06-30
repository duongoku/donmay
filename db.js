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
	{ _id: 1, main: p1, question : "Lý tưởng của đoàn thanh niên cộng sản Hồ Chí Minh là gì? Đồng chí sẽ làm gì để thực hiện lý tưởng đó?"},
	{ _id: 2, main: p2, question : "Các ý tưởng và cách thực hiện nhằm nâng cao chất lượng hoạt động Đoàn nơi đòng chí đang theo học."},
	{ _id: 3, main: p3, question : "Giải thích và nêu cảm nhận của bản thân đối với việc Đoàn TNCS Hồ Chí Minh qua các lần đổi tên gọi?"},
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
