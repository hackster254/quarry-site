const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

const productcontroller = require('../controller/productcontroller');
const ownercontroller = require('../controller/ownercontroller')


/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);
//route.get('/', services.homeRoutes2)


/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

route.get('/add-product', services.add_product)

// routes for login
route.get('/login', services.login_owner)
route.post('/login', ownercontroller.verify )

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)
route.get('/update-product', services.update_product)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

// PRODUCT API
route.post('/api/products', productcontroller.create);
route.get('/api/products', productcontroller.find);
route.put('/api/products/:id', productcontroller.update);
route.delete('/api/products/:id', productcontroller.delete);





module.exports = route