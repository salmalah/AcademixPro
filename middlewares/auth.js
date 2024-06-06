const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect("/api/users/login");
};

module.exports = isAuthenticated;
