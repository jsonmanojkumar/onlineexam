import { category } from '../../model';


class categoryController {
    
    constructor() { }

    create(body) {
        return new Promise((resolve, reject) => {
            let response = {};
            try {
                console.log('ssssss',body);
                if (body.name) {
                    let new_category = new category(body);
                    new_category.save((err, savedItem) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.msg = 'category added successfully!';
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
                if (body.category_id) {
                    category.update({ _id: body.category_id }, { $set: { is_deleted: true } }, (err, deletedResult) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.msg = 'category deleted successfully!'
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
                    category.update({ _id: req.params.id }, { $set: data }, (err, updatedResult) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error 1'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.msg = 'category updated successfully!'
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

                category.find({ is_deleted: false }, (err, categoryList) => {
                    if (err) {
                        response.status = 500;
                        response.data = err;
                        response.msg = 'Server Error'
                        reject(response);
                    }
                    else {
                        response.status = 200;
                        response.data = categoryList;
                        response.msg = 'category list fetch successfully!'
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
                    category.findOne({ _id: body.params.id, is_deleted: false }, (err, categoryData) => {
                        if (err) {
                            response.status = 500;
                            response.data = err;
                            response.msg = 'Server Error1'
                            reject(response);
                        }
                        else {
                            response.status = 200;
                            response.data = categoryData;
                            response.msg = 'category fetch successfully!'
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

module.exports = new categoryController();