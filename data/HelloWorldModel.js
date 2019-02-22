"use strict";
const Database = require("./DatabasePromise.js");

class HelloWorldModel {

    constructor() {
    }

    // Get from DB and put in object var
    fetchWorlds(aCallback) {
        let database = new Database();
        let worlds = [];
        database.query(`SELECT * FROM worlds;`)
            .then((rows) => {
                if (rows != undefined) {
                    // map the rows into the array of objects
                    console.log(rows);
                    worlds = rows.map(r => ({
                        "id": r.id,
                        "name": r.name
                    }));
                    // Send it back to requestor in completion handler callback
                    aCallback(worlds);
                }
            })
            .catch(err => {
                console.log(`error inserting into worlds ${err}`);
            });;
        database.close();
    }
}

module.exports = HelloWorldModel;