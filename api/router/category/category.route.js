import express from 'express';
import { categoryController } from '../../controller';

class CayegoryRouter {
    constructor() {
        
    }
    init() {
        const router = express.Router();
        router.post('/category/create', (req, res) => this.create(req, res));
        router.put('/category/delete',(req, res) => this.deleteItem(req, res));
        router.put('/category/update/:id',  (req, res) => this.update(req, res));
        router.get('/category/get-all', (req, res) => this.getAll(req, res));
        router.get('/category/get-by-id/:id', (req, res) => this.getById(req, res));
        return router;
    }
    create(req, res) {
        
        categoryController.create(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    deleteItem(req, res) {
        categoryController.deleteItem(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    update(req, res) {
        categoryController.update(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getAll(req, res) {
        categoryController.getAll(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getById(req, res) {
        categoryController.getById(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
}
module.exports = new CayegoryRouter();