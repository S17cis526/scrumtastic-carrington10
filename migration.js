"use strict";

module.exports = function(dp){
 dp.run("CREATE TABLE projects (id INTEGER Primary KEY, name TEXT, description Text, version TEXT, repository Text, license TEXT)")
 dp.run("CREATE TABLE cards (id INTEGER PRIMARY KEY, FOREIGN KEY (project_id) REFERENCES project")

}
