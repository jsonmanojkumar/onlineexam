import express from 'express';
import { paperattemptedController } from '../../controller';

class paperattemptedRouter {
    constructor() {
        
    }
    init() {
        const router = express.Router();
        router.post('/paperattempted/create', (req, res) => this.create(req, res));
        router.put('/paperattempted/delete',(req, res) => this.deleteItem(req, res));
        router.put('/paperattempted/update/:id',  (req, res) => this.update(req, res));
        router.get('/paperattempted/get-all', (req, res) => this.getAll(req, res));
        router.get('/paperattempted/get-by-id/:id', (req, res) => this.getById(req, res));
        return router;
    }
    create(req, res) {
        console.log(req);
        paperattemptedController.create(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    deleteItem(req, res) {
        paperattemptedController.deleteItem(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    update(req, res) {
        paperattemptedController.update(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getAll(req, res) {
        paperattemptedController.getAll(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getById(req, res) {
        paperattemptedController.getById(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
}
module.exports = new paperattemptedRouter();