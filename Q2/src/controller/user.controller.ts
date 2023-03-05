import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export const addUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const user = await prisma.user.create({
      data: data
    });
    res.send(user)
  } catch (error) {
    console.log(error);
  }
};

export const findAllUser = async (req: Request, res: Response) => {
  let users = await prisma.user.findMany(
    
  );
  console.log(users);
  res.json(users);
};



export const updateUser=async (req:Request,res:Response)=>{
    const data= req.body
    let user = await prisma.user.update({
        where:{
            id:req.params.id
        },
        data:data
    });
    res.json({"msg": "user updated", "user":user});
}

export const deleteUser= async (req:Request,res:Response)=>{
    let user = await prisma.user.delete({
        where:{
            id: req.params.id
        }
    });
    res.json({"msg": "user deleted", "user":user});
}
export const findUserByID = async (req: Request, res: Response) => {
  let {userID}= req.body
  let users = await prisma.user.findMany(
    {
      where:{
        id:userID

      }
    }
  );
  console.log(users);
  res.json(users);
};
export const findUserByEmail = async (req: Request, res: Response) => {
  let {mEmail}= req.body
  let users = await prisma.user.findMany(
    {
      where:{
        email:mEmail
      }
    }
  );
  console.log(users);
  res.json(users);
};
export const findUsersByAge = async (req: Request, res: Response) => {
  let {mAge}= req.body
  let users = await prisma.user.findMany(
    {
      where:{
        age:{
          gt:mAge
        }

      }
    }
  );
  console.log(users);
  res.json(users);
};

export const findUsersByRole = async (req:Request, res:Response)=>{
  try{
      
   const uRloe = req.body.role
   
   const users = await prisma.user.findMany({
      where:{
          role: uRloe
      }

   })
   if(!users){
       res.json('users does not exit')
  }else{
      res.json(users)
   }
  }catch(e){
      console.log(e)
  }
}
export const checkPasswordAndEmil = async (req:Request, res:Response)=>{
  try{
      
   const {username, password} = req.body
   
   const user = await prisma.user.findFirst({
      where:{
          username,
          password
      }


   })
   if(!user){
       res.json('the Email or Password is wrong')
  }else{
      res.json(user)
   }
  }catch(e){
      console.log(e)
  }
}
export const updatePassword = async (req:Request, res:Response)=>{
  try{
      
   const  {id} = req.params
   let password = req.body
   const user = await prisma.user.update({
      where:{
          id: id
      },
      data: password
   })
   if(user){
       res.json('user updated!')
  }else{
      res.json(user)
   }
  }catch(e){
      console.log(e)
  }
}

export const findUserByJY = async (req:Request, res:Response)=>{
  try{
      const id = req.body.id
      const JY = req.body.joiningYear
      const getUser = await prisma.user.findFirst({
          where:{
              id:id,
              joiningYear: JY
          },
          select:{
           joiningYear: true
          },
      })
     if(!getUser){
         res.json({
             message: `The user not regulated in this year`
            })

      }else{
          res.json({
              message: `the user join in this year ${getUser}`
             })
      }
     
  }catch(e){
      console.log(e)
  }
}

export const findUsersByJy = async (req:Request, res:Response)=>{
  try{
      
   const uJY = req.body.joiningYear
   
   const user = await prisma.user.findMany({
      where:{
          
          joiningYear:{
              gte: uJY
             }  
      }

   })
   if(!user){
       res.json('not user funde')
  }else{
      res.json(user)
   }
  }catch(e){
      console.log(e)
  }
}