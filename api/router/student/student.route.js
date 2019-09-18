import express from 'express';
import { studentsController } from '../../controller';

class StudentsRouter {
    constructor() {
        
    }
    init() {
        const router = express.Router();
        router.post('/student/create', (req, res) => this.create(req, res));
        router.put('/student/delete',(req, res) => this.deleteItem(req, res));
        router.put('/student/update/:id',  (req, res) => this.update(req, res));
        router.get('/student/get-all', (req, res) => this.getAll(req, res));
        router.get('/student/get-by-id/:id', (req, res) => this.getById(req, res));
        return router;
    }
    create(req, res) {
        console.log(req);
        studentsController.create(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    deleteItem(req, res) {
        studentsController.deleteItem(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    update(req, res) {
        studentsController.update(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getAll(req, res) {
        studentsController.getAll(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
    getById(req, res) {
        studentsController.getById(req)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
                res.json(e);
            })
    }
}
module.exports = new StudentsRouter();