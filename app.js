"use-strict";

var sqlite3 = require('sqlite3');
var db =  new sqlite3.Database('scrumtatic.splite3')

var migrate = require('./src/migration');
migrate(db);
db.run("INSERT INTO projects (name) values ('title')");
console.log(db.run("select * From projects"));
