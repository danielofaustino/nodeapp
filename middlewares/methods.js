function getMethod(req, res, next) {
  console.log(`${req.method} - ${req.url}`);

  next();
}



module.exports = {
  getMethod
}