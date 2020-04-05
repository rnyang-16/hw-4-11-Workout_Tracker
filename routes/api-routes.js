// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function(app) {
  
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // app.get("/api/exercises", (req, res) => {
  //   db.Exercise.find({})
  //     .then(dbExercise => {
  //       res.json(dbExercise);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate({'_id':req.params.id}, { $push: { exercises: req.body } }, { new: true })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
    });
  });
};
