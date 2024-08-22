const db1 = require('../backend/db');
const User = require('../backend/models/user');
// const login = require('../backend/login');
// const signup = require('../backend/signup');

const home = async(req,res)=>{

    try{
        console.log(req.body);
        res.status(200).send(req.body);
        // res.status(200).send("Message:In Home")
    }
    catch(error){
     res.status(400).send("Internal Server Error");
    }
}

const about = async(req,res)=>{
    try{
        res.status(200).send("Message:In About11");
    }
    catch(error){
        res.status(400).send("Internal Server Error");
    }
}

const login = async(req,res)=>{
    try{
        console.log(req.body);
        res.send(req.body);
        db1(res.body);
    }
    catch(error){
     res.send("Message:Internal Server Error");
    }
}

const signup = async(req,res)=>{
    try{
        console.log(req.body);
        // return res.status(200).send("ok")
        const {name,registrationNo,department,email,password}=req.body;
        const user = await User.create({name,registrationNo,department,email,password});
        return res.status(200).send(user);


        // db1(req.body);
        // res.send(req.body);                     ////// ----------
    }
    catch(error){
     res.send("Message:Internal Server Error");
    }
}

const newuser = async(req,res)=>{
    try{
        console.log(req.body);
        db1(req.body);
        res.send(req.body);                   ////-------------
    }
    catch(error){
     res.send("Message:Internal Server Error");
    }
}
 


module.exports = {home,about,login,signup,newuser};