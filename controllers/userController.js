const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.user.findAll({}).then(function(users) {
      console.log(users);
      res.json(users);
    });
  }
};
