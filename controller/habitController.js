const Habit = require("../models/Habits")

// create a habit
exports.createHabit = async(req,res) =>{
    try {
        console.log(req.body);
        Habit.create({
            "habit": req.body.habitInput
        }, function(err, newHabit){
            if(err){
                console.log('Error in creating a habits');
                return;
            }
            console.log('******', newHabit);
            
        });
        return res.redirect('back');
        //const habit = await Habit.findOne({'habit': req.body.habit});

        // const newHabit = await Habit.create(req.body);

        // if(!newHabit){
        //     console.log('Error in fetching tasks from db');
        //     return;
        // }
        // return res.redirect('back');

        // if(habit){
        //     return res.status(400).json({massage: "Already present this habit."});
        // }
        // const newHabit = await Habit.create(req.body);
        // if(!newHabit){
        //     return res.status(400).json({massage: "Error creating habit"});
        // }
        // return res.status(200).json({massage: "Successfully created habit."});
    } catch (error) {
        return res.status(500).json({"Error": error, massage: "Internal server error..."});
    }
}

// show all habits
exports.getAllHabits = async(req,res) =>{
    try {
        const habits = await Habit.find();
          
        return res.render('habits',{
            title:"Habits data",
            habits: habits,
        });
        
        
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
     console.log(habit.status);
    var newStatus = '';
    if(habit.status === 'NONE'){
        newStatus = "DONE"
    }else if(habit.status === 'DONE'){
        newStatus = "NOT DONE"
    }else{
        newStatus = "NONE"
    }
    habit.status = newStatus;
    habit.save();
    return res.redirect('back');
}