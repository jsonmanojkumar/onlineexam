import express from 'express';
import { subjectController } from '../../controller';

class SubjectRouter {
    constructor() {
        
    }
    init() {
        const router = express.Router();
        router.post('/subject/create', (req, res) => this.create(req, res));
        router.put('/subject/delete',(req, res) => this.deleteItem(req, res));
        router.put('/subject/update/:id',  (req, res) => this.update(req, res));
        router.get('/subject/get-all', (req, res) => this.getAll(req, res));
        router.get('/subject/get-by-category/:id', (req, res) => this.getByCategory(req, res));
        router.get('/subject/get-by-id/:id', (req, res) => this.getById(req, res));
        return router;
    }
    create(req, res) {
        
        subjectController.create(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    deleteItem(req, res) {
        subjectController.deleteItem(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    update(req, res) {
        subjectController.update(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getAll(req, res) {
        subjectController.getAll(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getByCategory(req, res) {
        subjectController.getByCategory(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getById(req, res) {
        subjectController.getById(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
}
module.exports = new SubjectRouter();