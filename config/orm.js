var connection = require('./connection.js');

// Connect to MySQL database
connection.connect(function(err) {
    if (err) {
        console.log('error connecting: ' + err);
        return;
    };
    console.log('connected as id ' + connection);
});



//  orm is an object that has properties containing functions that manipulate data in our burger database
orm = {

    selectAll: function(callback) {

        // Run MySQL Query
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) {
                console.log(err);
            }
            callback(result);
        });

    },


    // insertBurger: function(burger_name, callback) {
    //     connection.query('INSERT INTO burgers SET ?', { burger_name: burger_name, devoured: false }, function(err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     });
    // },


    // devourBurger: function(burgerID, callback) {

    //     connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }], function(err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     });


    // }



}


module.exports = orm;