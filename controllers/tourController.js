const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/tour-simple.json`, "utf-8")
);

exports.checkId = (req, res, next, val) => {
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "error",
      data: null,
    });
  }

  req.tour = tour;

  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: "error",
      data: null,
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getSingleTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: req.tour,
    },
  });
};

exports.createTour = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: "You can create tours here",
  });
};

exports.updateTour = (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: "You can update tours here",
  });
};

exports.deleteTour = (req, res) => {
  console.log(req.params);
  res.status(204).json({
    status: "success",
    data: null,
  });
};
