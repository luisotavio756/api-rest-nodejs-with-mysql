const mysql = require('mysql');

// Init Database
var Mysql = () => {
    var _pool = mysql.createPool({
        "connectionLimit"   : "10",
        "host"              : "localhost",
        "user"              : "root",
        "password"          : "",
        "database"          : "api-nodejs"

    });

    // Init Connection
    var _getConnection = () =>{
        return new Promise((resolve, reject)=>{
            _pool.getConnection((err, connection)=>{
                if(err)
                    throw err;
                else{
                    resolve(connection);
                }
            });
        });
    }

    // Close Connection
    var _releaseConnection = (connection) => {
        connection.release();
    }

    //Return Connection
    return{
        getConnection       : _getConnection,
        releaseConnection   : _releaseConnection
    };
}

module.exports = Mysql();