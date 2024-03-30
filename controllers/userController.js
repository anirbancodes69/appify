const fs = require("fs");

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/users.json`, "utf-8")
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    result: users.length,
    data: {
      users: users,
    },
  });
};

exports.getSingleUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not implemented",
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not implemented",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not implemented",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not implemented",
  });
};
