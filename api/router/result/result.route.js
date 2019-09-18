import express from 'express';
import { resultController } from '../../controller';

class resultRouter {
    constructor() {
        
    }
    init() {
        const router = express.Router();
        router.post('/result/create', (req, res) => this.create(req, res));
        router.put('/result/delete',(req, res) => this.deleteItem(req, res));
        router.put('/result/update/:id',  (req, res) => this.update(req, res));
        router.get('/result/get-all', (req, res) => this.getAll(req, res));
        router.get('/result/get-by-id/:id', (req, res) => this.getById(req, res));
        return router;
    }
    create(req, res) {
        console.log(req);
        resultController.create(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    deleteItem(req, res) {
        resultController.deleteItem(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    update(req, res) {
        resultController.update(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getAll(req, res) {
        resultController.getAll(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getById(req, res) {
        resultController.getById(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
}
module.exports = new resultRouter();