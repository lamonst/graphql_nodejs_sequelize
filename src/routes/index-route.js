const express = require('express');

const router = express.Router();

const productResolver = require('../resolvers/product-resolver');

router.get('/', (req, res, next) => {
    productResolver.get().then(result => {
        res.status(200).send(result);
    });
});

module.exports = router;