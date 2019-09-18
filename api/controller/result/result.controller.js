import { result } from '../../model';


class resultController {
    constructor() { }

    create(body) {
        return new Promise((resolve, reject) => {
            let response = {};
            try {
                console.log('ssssss',body);
                if (body.first_name && body.last_name && body.course && body.DOB) {
                    let new_result = new result(body);
                    new_result.save((err, savedItem) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.msg = 'result added successfully!';
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
                if (body.student_id) {
                    result.update({ _id: body.result_id }, { $set: { is_deleted: true } }, (err, deletedResult) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.msg = 'result deleted successfully!'
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
                    result.update({ _id: req.params.id }, { $set: data }, (err, updatedResult) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error 1'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.msg = 'result updated successfully!'
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

                result.find({ is_deleted: false }, (err, resultList) => {
                    if (err) {
                        response.status = 500;
                        response.data = err;
                        response.msg = 'Server Error'
                        reject(response);
                    }
                    else {
                        response.status = 200;
                        response.data = resultList;
                        response.msg = 'result list fetch successfully!'
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
                    result.findOne({ _id: body.params.id, is_deleted: false }, (err, resultData) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error1'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.data = resultData;
                            response.msg = 'result fetch successfully!'
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

module.exports = new resultController();