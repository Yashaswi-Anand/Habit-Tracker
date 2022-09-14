const User = require("../models/User");


exports.createUser = async(req,res) =>{
    
    try {
        const userName = await User.findOne({userName: req.body.userName});
        console.log("user:",userName);
        if(userName){
            res.cookie('user_name',userName._id);
        }else{
            const newUser = await User.create({userName: req.body.userName});
            res.cookie('user_name', newUser._id);
            console.log("new user:",newUser);
        }
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

exports.getUser = async(req,res) =>{
    try {
        
        // const users = await User.find();
          
        // return res.render('user',{
        //     title:"User | Login",
        //     users: users,
        // });

        if(req.cookies.user_name){
            return res.redirect('/habits');
        }else{
            return res.render('user',{
                title:"User | Login",
            });
        }
        // return res.render('user',{
        //     title:"User | Login",
        // });
    } catch (error) {
        console.log(error);
    }
}

exports.logout = (req,res) =>{
    res.clearCookie('user_name');
    return res.redirect('/');
}