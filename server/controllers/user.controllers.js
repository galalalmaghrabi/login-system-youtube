const { newUser, login } = require("../models/user.model");
exports.newUser = (req, res, next) => {
  const data = req.body;
  newUser(data)
    .then((response) => {
      res.status(200).json({ msg: response });
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
};
exports.login = (req, res, next) => {
  const data = req.body;
  console.log(data);
  login(data)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
};
