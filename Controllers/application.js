const express =require('express');
const UserModel =require('../models/user')
const {StreamChat} =require('stream-chat')

const streamchat = StreamChat.getInstance('5vvps79455jb' , '4g2suvjcz4aagyxr4rsdv7v2w2jk9rhg6cm2rgy9vtgqj8uj9ytn7dmsq65jdrud')

const createUser = async (req ,res ) =>{
  const {email , type , id} =req.body;
    const user = new UserModel({email : email , role : type , userId : id }  )
    console.log(user)


    try{
        await user.save()
        await streamchat.upsertUser({id , email })
        res.status(200).send("sucess")
    }catch(err){
        console.log(err)
        res.send(err)
    }


}
const login  = async (req,res) => {
   const {email} =req.body;
   try{
    const {users: [user]} = await streamchat.queryUsers({email}) 
    const token =  streamchat.createToken(email)
    res.set("Content-Type", "application/json");
    res.status(200).send({token : token , userDetails : user})
   }catch(err){
    console.log(err)
    res.sendStatus(400)
   }

}

exports.createUser = createUser;
exports.login =login