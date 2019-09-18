import { subject } from '../../model';


class subjectController {
    constructor() { }

    create(body) {
        return new Promise((resolve, reject) => {
            let response = {};
            try {
                console.log('ssssss', body);
                if (body.category && body.subject) {
                    let new_subject = new subject(body);
                    new_subject.save((err, savedItem) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.msg = 'subject added successfully!';
                            resolve(response);
                        }
                    });

                }
                else {
                    response.status = 404;
                    response.msg = 'Some data is missing!';
                    reject(response);
                }

            } catch (error) {
                response.status = 500;
                response.data = error;
                response.msg = 'Server Error'
                reject(response);
            }
        })
    }
    deleteItem(body) {

        return new Promise((resolve, reject) => {

            let response = {};

            try {
                if (body.subject_id) {
                    subject.update({ _id: body.subject_id }, { $set: { is_deleted: true } }, (err, deletedResult) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.msg = 'subject deleted successfully!'
                            resolve(response);
                        }
                    })

                }
                else {
                    response.status = 404;
                    response.msg = 'Some data is missing!';
                    reject(response);
                }

            } catch (error) {
                response.status = 500;
                response.data = error;
                response.msg = 'Server Error'
                reject(response);
            }

        })


    }
    update(req) {


        return new Promise((resolve, reject) => {
            let response = {};

            try {
                if (req.params.id && req.body) {
                    var data = req.body;
                    delete data._id;
                    subject.update({ _id: req.params.id }, { $set: data }, (err, updatedResult) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error 1'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.msg = 'subject updated successfully!'
                            resolve(response);
                        }
                    })

                }
                else {
                    response.status = 404;
                    response.msg = 'Some data is missing!';
                    reject(response);
                }

            } catch (error) {
                response.status = 500;
                response.data = error;
                response.msg = 'Server Error 2'
                reject(response);
            }

        })

    }
    getAll(body) {
        return new Promise((resolve, reject) => {
            let response = {};

            try {

                subject.find({ is_deleted: false }, (err, subjectList) => {
                    if (err) {
                        response.status = 500;
                        response.data = err;
                        response.msg = 'Server Error'
                        reject(response);
                    }
                    else {
                        response.status = 200;
                        response.data = subjectList;
                        response.msg = 'subject list fetch successfully!'
                        resolve(response);
                    }
                })


            } catch (error) {
                response.status = 500;
                response.data = error;
                response.msg = 'Server Error'
                reject(response);
            }

        })
    }
    getByCategory(req) {
        return new Promise((resolve, reject) => {
            let response = {};

            try {

                subject.find({ category: req.params.id, is_deleted: false }, (err, subjectList) => {
                    if (err) {
                        response.status = 500;
                        response.data = err;
                        response.msg = 'Server Error'
                        reject(response);
                    }
                    else {
                        response.status = 200;
                        response.data = subjectList;
                        response.msg = 'subject list fetch successfully!'
                        resolve(response);
                    }
                })


            } catch (error) {
                response.status = 500;
                response.data = error;
                response.msg = 'Server Error'
                reject(response);
            }

        })
    }
    getById(body) {

        return new Promise((resolve, reject) => {
            let response = {};

            console.log(body);

            try {
                if (body.params.id) {
                    subject.findOne({ _id: body.params.id, is_deleted: false }, (err, subjectData) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error1'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.data = subjectData;
                            response.msg = 'subject fetch successfully!'
                            resolve(response);
                        }
                    })

                }
                else {
                    response.status = 404;
                    response.msg = 'Some data is missing!';
                    reject(response);
                }

            } catch (error) {
                response.status = 500;
                response.data = error;
                response.msg = 'Server Error2'
                reject(response);
            }

        })

    }


}

module.exports = new subjectController();