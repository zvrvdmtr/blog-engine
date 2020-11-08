exports.requireAuth =  function(req, res, next) {
    if (req.header('jwt') !== undefined) {
      next()
    }
    else {
      res.status(404);
      res.send();
    }
  }