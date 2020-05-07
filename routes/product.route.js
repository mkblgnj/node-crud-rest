const express = require('express');
const router = express.Router();

//Require the controller which we did not create yet!!

const product_controller = 
require('../controllers/product.controller');

//a simple test url to check that all of our files are communicating correctly

router.get('/',product_controller.welcome);
router.post('/create',product_controller.product_create);
router.get('/:id',product_controller.product_details);
//router.get('/all',product_controller.product_details_all);
router.put('/:id/update',product_controller.product_update);
router.delete('/:id/delete',product_controller.product_delete);

module.exports = router;