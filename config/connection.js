var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '', //NULL
        database: 'burgers'
    });
}


// Export the Connection
module.exports = connection;