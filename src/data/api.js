const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Had6$Sq78",
    database: "ems",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
        return;
    }

    console.log("Connected to MySQL database.");
});

function getClientData(callback) {
    connection.query("SELECT * FROM clients", (error, results, fields) => {
        if (error) {
            console.error("Error retrieving data from MySQL database:", error);
            return;
        }

        callback(results);
    });
}

module.exports = {
    getClientData,
};
