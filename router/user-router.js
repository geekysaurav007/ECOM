const express=require('express')
const {getUsers,saveUsers,loginUser,updateUser,updateuserById}=require('../controller/user-controller')

const  {userAuthMiddleware,adminAuthMiddleware}  = require('../middlewares/user-auth-middleware')
const userRouter=express.Router()
//........> /api/users pe get request
userRouter.get('',getUsers)
//.........> /api/users pe post request
userRouter.post('',saveUsers)
// .......> /api/users/login......used to login a user
userRouter.post('/login',loginUser)
//------> /api/users pe put request update krne ke liye//middleware->userauth or not
userRouter.put("/",userAuthMiddleware,updateUser)

userRouter.put('/:id',adminAuthMiddleware,updateuserById)

module.exports={userRouter}