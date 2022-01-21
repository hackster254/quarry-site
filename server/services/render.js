const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    const reqone = axios.get("http://localhost:3000/api/users")
    const reqtwo = axios.get("http://localhost:3000/api/products")
    axios.all([reqone,reqtwo])
        .then(
            axios.spread((...response) =>{
            res.render('index', { users : response[0].data , products: response[1].data});
        })
        /* .catch(err =>{
            res.send(err);
        })
        */
   
    

        )
}
 


exports.add_user = (req, res) =>{
    res.render('add_user');
}
exports.add_product = (req, res) =>{
    res.render('add_products');
}

// login page rendering
exports.login_owner = (req, res) =>{
    res.render('loginpage');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.update_product = (req, res) =>{
    axios.get('http://localhost:3000/api/products', { params : { id : req.query.id }})
        .then(function(productdata){
            res.render("update_product", { product : productdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}