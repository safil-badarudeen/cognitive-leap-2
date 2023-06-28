const express = require('express');
const router = express.Router();
const{getCategories}=require('../controllers/categoryController');
       
router.route('/allCategories').get(getCategories)

module.exports = router