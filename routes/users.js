const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/').get((req,res)=>{
    // console.log(req.body);
    const user_id = req.body.user_id;
    const pswd = req.body.pswd;
    const user={name:"Shubhankar Bhadra"}
    Users.findById("5ed36527f03ccf5f0c44ecc5")
    .then(user=>{
        console.log(user)
        if(user.length===1){
            res.redirect(`/profile?id=${user[0]._id}`);
        }
        else{
            res.redirect('/');
        }
    }).catch((err)=>{
        res.json('Error: '+err);
    })
});

router.route('/update/:id').post((req,res)=>{
    const id = req.params.id;
    const change={
        pswd : req.body.pswd,
        dob : req.body.dob
    }
    Users.findByIdAndUpdate(id,change)
    .then((user)=>{
        res.redirect('/');
    })
})

module.exports = router;