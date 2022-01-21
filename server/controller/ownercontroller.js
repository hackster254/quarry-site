var Ownerdb = require('../model/ownermodel');
const bcrypt = require('bcrypt');

exports.verify = async (req,res)=> {
    try {
        const {name, password} = req.body;
        const owner = await Ownerdb.find({name})
        console.log("password is: "+ owner[0].password)
        console.log("name is: "+ owner[0].name)

        if(owner.length > 0){
            //const authResult = await compare(password, owner[0].password);
            if (password === owner[0].password){
            //if(authResult){
                res.redirect('/')
            } else {
                res.send('Auth failed')
            }
        }
    } catch(error){
        res.send('Auth failed catch error')
        console.log(error)
    }
}