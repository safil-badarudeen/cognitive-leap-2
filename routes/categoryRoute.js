const express = require('express');
const router = express.Router();
const{getCategories}=require('../controllers/categoryController');
       
router.route('/categories').get(getCategories)

module.exports = router