const { db1,signindb } = require('../backend/db');
const {generateAccessToken,verifyAccessToken} = require('../tokenGeneration/jwtToken')
const home = async(req,res)=>{
  try {
    console.log(req.body)
    const token = generateAccessToken(req.body);
    res.send({token});
  }
    catch (error) {
    res.status(400).send("Internal server error1");
  }
}

const about = async(req,res)=>{
  try {
    const b = req.body;
    if(b.Age>40)
     res.status(200).send("Message:Welcome U R Eligible to join my club")
    else{
      res.status(200).send("Message:Welcome U R not  Eligible to join my club")
    }
  } catch (error) {
     res.status(400).send("Message:Internal Server Error")
  }
 }

 const signup = async(req,res)=>{
  console.log(req.body);
  const response = await db1(req.body);
  res.send(response);
 }

 const signin = async (req,res)=>{
  console.log(req.body);
   const msg = await signindb(req.body);
  res.json({msg})
 }
module.exports = {home,about,signup,signin};