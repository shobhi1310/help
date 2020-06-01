const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/').post((req,res)=>{
    // console.log(req.body);
    const user_id = req.body.user_id;
    const pswd = req.body.pswd;
    const user={user_id,pswd}
    Users.find(user)
    .then(user=>{
        if(user.length===1)
            res.redirect('/profile');
        else{
            res.redirect('/');
        }
    }).catch((err)=>{
        res.json('Error: '+err);
    })
});


module.exports = router;