exports.signup = function(params, next){
  dbPool.getConnection(function(error, conn){
    if(error){
      next(error);
    }else{
      var query = "insert into user(id, pwd, name, gender, regdate) values(?,?,?,?,curdate())";
      conn.query(query, [params.id, params.pwd, params.name, params.gender],
                function(error, result){
                  conn.release();
                  next(error, params.name);
      });
    }
  });
}
