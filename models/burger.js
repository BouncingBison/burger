var orm = require('../config/orm.js');

var burger = {


    selectAll: function(callback) {

        orm.selectAll(function(res) {
            callback(res);
        });
    }


};

// Export burger object file.
module.exports = burger;