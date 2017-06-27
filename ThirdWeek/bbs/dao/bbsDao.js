exports.selectList = function(next){
  dbPool.getConnection(function(error, conn){
    if(error){
      next(error);
    }else{
      var query = "select * from bbs order by idx DESC";
      conn.query(query, function(error, result){
        conn.release();
        next(error, result);
      });
    }
  });
}

exports.insert = function(params, next){
  dbPool.getConnection(function(error, conn){
    if(error){
      next(error);
    }else{
      var query = "insert into bbs(title, content, name, regdate)"
                    + " values(?,?,?,curdate())";
      var paramArr = [params.title, params.content, params.name];
      conn.query(query, paramArr, function(error, result){
        conn.release();
        next(error);
      });
    }
  });
}

exports.selectOne = function(idx, next){
  dbPool.getConnection(function(error, conn){
    if(error){
      next(error);
    }else{
      var query = "select * from bbs where idx = ?";
      conn.query(query, idx, function(error, result){
        conn.release();
        next(error, result);
      });
    }
  });
}
