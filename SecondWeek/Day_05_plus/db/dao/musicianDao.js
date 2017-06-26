var dbPool = require('../db_pool');

exports.selectList = function(callback){
  dbPool.getConnection(function(error, conn){
    if(error){
      console.error(error);
    }else{
      var query = "select * from musician";
      conn.query(query, function(error, result){
        callback(error, result);
      });
    }

  });
}

exports.insert = function(params, callback){
  dbPool.getConnection(function(error, conn){
    if(error){
      console.log(error);
    }else{
      var query = 'insert into musician(name, company) values(?,?)';
      conn.query(query, [params.name, params.company], callback);
    }
  });
}
