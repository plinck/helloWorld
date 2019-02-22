const mysql = require('mysql');
require("dotenv").config();

class Database {
    constructor() {
        let config;

        if (process.env.JAWSDB_URL) {
            // Database is JawsDB on Heroku
            console.log("Using GCP SQL");
            config = process.env.JAWSDB_URL;
        } else if (process.env.INSTANCE_CONNECTION_NAME) {
            // GCP
            config = {
                socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,            
                user: process.env.SQL_USER,
                password: process.env.SQL_PASSWORD,
                database: process.env.SQL_DATABASE
            };
        } else {
            // Database is local
            console.log("Using Local DB");
            config = {
                host: "localhost",
                port: 3306,
                user: process.env.SQL_USER,
                password: process.env.SQL_PASSWORD,
                database: process.env.SQL_DATABASE
            };
        }
        console.log(config);
        this.connection = mysql.createConnection(config);
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                return resolve(rows);
            });
        });
    }

    close() {
        this.connection.end();
    }
}

module.exports = Database;