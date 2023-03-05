import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export const addMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const movie = await prisma.movie.create({
      data: data
    });
    res.send(movie)
  } catch (error) {
    console.log(error);
  }
};

export const findAllMovie = async (req: Request, res: Response) => {
  let movies = await prisma.movie.findMany(
    
  );
  console.log(movies);
  res.json(movies);
};



export const updateMovie=async (req:Request,res:Response)=>{
    const data= req.body
    let movie = await prisma.movie.update({
        where:{
            id:req.params.id
        },
        data:data
    });
    res.json({"msg": "movie updated", "movie":movie});
}

export const deleteMovie= async (req:Request,res:Response)=>{
    let movie = await prisma.movie.delete({
        where:{
            id: req.params.id
        }
    });
    res.json({"msg": "movie deleted", "movie":movie});
}
export const findMovieByName = async (req: Request, res: Response) => {
  let {mName}= req.body
  let movies = await prisma.movie.findFirst(
    {
      where:{
        name:mName

      }
    }
  );
  console.log(movies);
  res.json(movies);
};
export const findMovieByGenre = async (req: Request, res: Response) => {
  let {mGenre}= req.body
  let movies = await prisma.movie.findMany(
    {
      where:{
        genre:mGenre

      }
    }
  );
  console.log(movies);
  res.json(movies);
};
export const findMovieByRating = async (req: Request, res: Response) => {
  let {mRating}= req.body
  let movies = await prisma.movie.findMany(
    {
      where:{
        rating:mRating

      }
    }
  );
  console.log(movies);
  res.json(movies);
};