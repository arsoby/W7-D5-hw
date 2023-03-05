import express, { Router } from 'express';
import { addMovie, deleteMovie, findAllMovie, findMovieByGenre, findMovieByName, findMovieByRating, updateMovie } from '../controller/movie.controller';
const router=express.Router()
import validates from '../middleware/validates'
import {registertype} from "../zod.schema/zod.user"

//read
router.get('',findAllMovie);
router.get('/name',findMovieByName);
router.get('/genre',findMovieByGenre);
router.get('/rating',findMovieByRating);

//create
router.post('',validates(registertype),addMovie);

//update
router.put('/:id',validates(registertype),updateMovie); 

//delete
router.delete('/:id',deleteMovie); 

export default router