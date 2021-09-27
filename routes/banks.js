const express = require('express');
const router = express.Router();
const Bank = require('../business_layer/banks')

router.get('/', Bank.getAll , (req, res, next) => {
    res.send(res.result);
});

router.post('/', Bank.create, (req, res, next) => {
    res.send(res.result);
    }
)

router.put('/', Bank.update, (req, res, next) => {
    res.send(res.result);
})

router.delete('/:id', Bank.delete, (req, res, next) => {
    res.send(res.result);
})

module.exports = router;
