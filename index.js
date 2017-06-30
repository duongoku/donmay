const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./db');
const result = fs.readFileSync('template/result.html', 'utf-8');
const input = fs.readFileSync('template/input.html', 'utf-8');;

let a = 0, b = 0, c = 0, name = 0, clss = 0;

function replace(str, tag, value) {
	return str.replace(`[${tag}]`, value);
}

app.get('/', (req, res) => {
	let inp = input;
	res.send(inp);
});

app.post('/input', (req, res, next) => {
	name=req.body.name;
	clss=req.body.clss;
	a=req.body.a;
	b=req.body.b;
	c=req.body.c;
	res.redirect("/result");
});

app.get('/result', (req, res, next) => {
	db.get(parseInt(a)%10, (err, paraa) => {
		if (err) return next(err);
		db.get(parseInt(b)%10, (err, parab) => {
			if (err) return next(err);
			db.get(parseInt(c)%10, (err, parac) => {
				if (err) return next(err);
			let response = result;
			response = replace(response, "name", name);
			response = replace(response, "clss", clss);
			response = replace(response, "para1", paraa.main);
			response = replace(response, "para2", parab.main);
			response = replace(response, "para3", parac.main);
			res.send(response);
			});	
		});
	});
});

app.listen(5000, () => {
	console.log("Running at localhost");
});