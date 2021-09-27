const modelBank = require('../models/bank')

class Bank {

    static getAll(req, res, next) {
        modelBank.findAll().then(result => {
            res.result = result;
            next();
        }).catch(err => {
            console.log('Project save error: ', err);
            next(err);
        })
    }

    static create(req, res, next) {
        modelBank.create({
            name: req.body.name,
            interestRate: req.body.interestRate,
            maxLoan: req.body.maxLoan,
            minDownPayment: req.body.minDownPayment,
            loanTerm: req.body.loanTerm
        }).then(result => {
            res.status(201);
            res.result = result;
            next();
        }).catch(err => {
            console.log('Server error(add new bank): ', err);
            next(err);
        })
    }

    static update(req, res, next) {
        modelBank.findByPk(+req.body.id)
            .then(result => {
                if (result) {
                    result.set(req.body).save().then(result => {
                        next();
                    }).catch(err => {
                        console.log('Server error(add new bank): ', err);
                        next(err);
                    });
                }
            })
            .catch(err => {
                console.log('Not found by id): ' + req.body.id, err);
                next(err);
            })
    }

    static delete(req, res, next) {
        modelBank.findByPk(req.params.id)
            .then(result => {
                if (result) {
                    result.destroy().then(result => {
                        next();
                    }).catch(err => {
                        console.log('Server error(add new bank): ', err);
                        next(err);
                    });
                } else {
                    console.log('Not found by id): ' + req.body.id);
                    res.send(Bank.build({name: 'not deleted'}))
                }
            })
            .catch(err => {
                console.log('Error finding by id', err);
                next(err);
            })
    }

}

module.exports = Bank
