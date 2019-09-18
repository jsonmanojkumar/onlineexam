import express from 'express';
import { papercodeController } from '../../controller';

class papercodeRouter {
    constructor() {
        
    }
    init() {
        const router = express.Router();
        router.post('/papercode/create', (req, res) => this.create(req, res));
        router.put('/papercode/delete',(req, res) => this.deleteItem(req, res));
        router.put('/papercode/update/:id',  (req, res) => this.update(req, res));
        router.get('/papercode/get-all', (req, res) => this.getAll(req, res));
        router.get('/papercode/get-by-id/:id', (req, res) => this.getById(req, res));
        return router;
    }
    create(req, res) {
        console.log(req);
        papercodeController.create(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    deleteItem(req, res) {
        papercodeController.deleteItem(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    update(req, res) {
        papercodeController.update(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getAll(req, res) {
        papercodeController.getAll(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getById(req, res) {
        papercodeController.getById(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
}
module.exports = new papercodeRouter();