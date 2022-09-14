const Habit = require("../models/Habits");
const User = require("../models/User");

// create a habit
exports.createHabit = async(req,res) =>{
    try {
        console.log(req.body);
        const dateArray = [];
        const status = [];
        for(let i=0;i<7;i++){
            const curDate = new Date();
           const date = new Date(curDate.setDate(curDate.getDate() - i));
           const dateInString = date.toString();
           dateArray[i] = dateInString.substring(4,15);
           status[i] = 'NONE'
        }
        Habit.create({
            "habit": req.body.habitInput,
            "date": dateArray,
            "status":status,
        }, function(err, newHabit){
            if(err){
                console.log('Error in creating a habits');
                return;
            }
            console.log('******', newHabit);
            
        });
        return res.redirect('back');
        
    } catch (error) {
        return res.status(500).json({"Error": error, massage: "Internal server error..."});
    }
}

// show all habits
exports.getAllHabits = async(req,res) =>{
    try {
        
        
        if(req.cookies.user_name){
            const habits = await Habit.find();
            const user = await User.findById(req.cookies.user_name);
            return res.render('habits',{
                title:"Habits",
                habits: habits,
                user:user,
            });
        }else{
            return res.redirect('/');
        }
        
        // Habit.find({}, function(err, habits){
        //     if(err){
        //         console.log('Error in fetching tasks from db');
        //         return;
        //     }
        //     return res.render('habits',{
        //         title:"Habits",
        //         todoList: habits,
        //     });
        // });
        // return res.status(200).json({habits,massage: "Successfully created habit."});
    } catch (error) {
        return res.status(500).json({"Error": error, massage: "Internal server error..."});
    }
}

// delete habit
exports.deleteHabit = async(req,res) => {
    const id = req.params.id;
    console.log(id);
    // Habit.findByIdAndDelete(id, function(error){
    //     if(error){
    //            console.log('error in deleting contact');
    //            return;
    //     }
    //      return res.redirect('back');
    // });
    const habit = await Habit.findByIdAndDelete(id);
    console.log(habit);
    return res.redirect('back');
}

exports.updateStatus = async(req,res) =>{
    const id = req.params.id;
    console.log(id);
     const habit = await Habit.findById(id);
     console.log(habit);
    var newStatus = '';
    if(habit.status[0] === 'NONE'){
        newStatus = "DONE"
    }else if(habit.status[0] === 'DONE'){
        newStatus = "NOT-DONE"
    }else{
        newStatus = "NONE"
    }
    habit.status[0] = newStatus;
    habit.save();
    return res.redirect('back');
}
// res.render("weekly_report",{ layout: './Layout/sidebar',title:"Report",});

exports.weeklyReport = async(req,res) =>{
    const id = req.query.id;
    console.log(id);
    try {
        if(req.cookies.user_name){
            const habits = await Habit.find();
            const user = await User.findById(req.cookies.user_name);
            return res.render('weekly_report',{
                layout: './Layout/sidebar',
                title:"Report",
                habits: habits,
                user:user,
            });
        }else{
            return res.redirect('/')
        }
    } catch (error) {
        console.log(err);
    }

}

exports.reportUpdate  = async(req,res) => {
    const id = req.params.id;
    const index = req.params.index;

    const habit = await Habit.findById(id);
    console.log(habit);
    const myStatus = habit.status[index];
    console.log(myStatus);
    var newStatus = '';
    if(myStatus === 'NONE'){
        newStatus = "DONE"
    }else if(myStatus === 'DONE'){
        newStatus = "NOT-DONE"
    }else{
        newStatus = "NONE"
    }
    habit.status[index] = newStatus;
    habit.save();
    return res.redirect('back');
}