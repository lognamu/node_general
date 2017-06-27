exports.selectList = function(callback){
  dbPool.getConnection(function(error, conn){
    if(error){
      callback(error);
    }else{
      var query = "select * from musician";
      conn.query(query, function(error, result){
        conn.release();
        callback(error, result);
      });
    }

  });
}

exports.insert = function(params, callback){
  dbPool.getConnection(function(error, conn){
    if(error){
      throw error;
    }else{
      var query = 'insert into musician(name, company) values(?,?)';
      conn.query(query, [params.name, params.company], function(error, result){
        conn.release();
        callback(error, result);
      });
    }
  });
}

exports.delete = function(id, callback){
  dbPool.getConnection(function(error, conn){
    if(error){
      throw error;
    }else{
      var query = 'delete from musician where id = ?';
      conn.query(query, id, function(error, result){
        conn.release();
        callback(error, result);
      });
    }
  });
}
