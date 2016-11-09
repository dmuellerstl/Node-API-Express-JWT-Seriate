var sql = require('seriate');

var connectDatabase = function(){
    var dbConnect = {  
    "server": "127.0.0.1",
    "user": "sa",
    "password": "password",
    "database": "nodeapi"
    };
    sql.setDefaultConfig( dbConnect );
    return sql;
}

module.exports = connectDatabase();