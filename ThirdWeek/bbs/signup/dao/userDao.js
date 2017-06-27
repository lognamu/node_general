exports.signup = function(params, next){
  dbPool.getConnection(function(error, conn){
    if(error){
      next(error);
    }else{
      var query = "insert into user(id, pwd, name, gender, regdate) values(?,?,?,?,curdate())";
      var paramArr = [params.id, params.pwd, params.name, params.gender];
      conn.query(query, paramArr, function(error, result){
        conn.release();
        next(error, params.name);
      });
    }
  });
}

exports.checkPwd = function(params, next){
  dbPool.getConnection(function(error, conn){
    if(error){
      next(error);
    }else{
      var query = "select * from user where id = ?";
      conn.query(query, params.id, function(error, result){
        next(error, result[0]);
      })
    }
  });
}
