import express from 'express';
import { userController } from '../../controller';

class userRouter {
    constructor() {
        
    }
    init() {
        const router = express.Router();
        router.post('/user/create', (req, res) => this.create(req, res));
        router.put('/user/delete',(req, res) => this.deleteItem(req, res));
        router.put('/user/update/:id',  (req, res) => this.update(req, res));
        router.get('/user/get-all', (req, res) => this.getAll(req, res));
        router.get('/user/get-by-id/:id', (req, res) => this.getById(req, res));
        return router;
    }
    create(req, res) {
        console.log(req);
        userController.create(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    deleteItem(req, res) {
        userController.deleteItem(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    update(req, res) {
        userController.update(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getAll(req, res) {
        userController.getAll(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getById(req, res) {
        userController.getById(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
}
module.exports = new userRouter();