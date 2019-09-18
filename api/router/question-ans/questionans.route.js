import express from 'express';
import { questionansController } from '../../controller';

class questionansRouter {
    constructor() {
        
    }
    init() {
        const router = express.Router();
        router.post('/questionans/create', (req, res) => this.create(req, res));
        router.put('/questionans/delete',(req, res) => this.deleteItem(req, res));
        router.put('/questionans/update/:id',  (req, res) => this.update(req, res));
        router.get('/questionans/get-all', (req, res) => this.getAll(req, res));
        router.get('/questionans/get-by-id/:id', (req, res) => this.getById(req, res));
        return router;
    }
    create(req, res) {
        console.log(req);
        questionansController.create(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    deleteItem(req, res) {
        questionansController.deleteItem(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    update(req, res) {
        questionansController.update(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getAll(req, res) {
        questionansController.getAll(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getById(req, res) {
        questionansController.getById(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
}
module.exports = new questionansRouter();