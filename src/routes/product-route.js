const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();

router.get('/', productController.get);
router.get('/:id', productController.getById);
router.post('/', productController.post);
router.put('/:id', productController.put);
router.delete('/:id', productController.delete);

module.exports = router;