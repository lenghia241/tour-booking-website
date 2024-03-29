const express = require('express');
const router = express.Router();

const tourController = require('./../controllers/tourController');

router.params('id', (req, res, next) => {});

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.postNewTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
