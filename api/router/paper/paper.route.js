import express from 'express';
import { paperController } from '../../controller';

class paperRouter {
    constructor() {
        
    }
    init() {
        const router = express.Router();
        router.post('/paper/create', (req, res) => this.create(req, res));
        router.post('/paper/get', (req, res) => this.getPaper(req, res));
        router.put('/paper/delete',(req, res) => this.deleteItem(req, res));
        router.put('/paper/update/:id',  (req, res) => this.update(req, res));
        router.get('/paper/get-all', (req, res) => this.getAll(req, res));
        router.get('/paper/get-by-id/:id', (req, res) => this.getById(req, res));
        return router;
    }
    getPaper(req, res){
        paperController.getPaper(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }

    create(req, res) {
        
        paperController.create(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    deleteItem(req, res) {
        paperController.deleteItem(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    update(req, res) {
        paperController.update(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getAll(req, res) {
        paperController.getAll(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getById(req, res) {
        paperController.getById(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
}
module.exports = new paperRouter();