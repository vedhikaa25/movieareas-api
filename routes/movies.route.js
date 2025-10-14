import express from 'express';

const router=express.Router();

// CRUD functionalities of a movie 

// /movies/
//R- for Reading the movies
router.get('/movies',(req,res) =>{
    res.send("List of movies");
});

// C- for Creating a movie
router.post('/movies',(req,res) =>{
res.send("create a movie");
});


// U- for Updating a movie
router.put('/movies/:id',(req,res) =>{
    res.send("update a movie");
});


// D - for Deleting movie
router.delete('/movies/:id',(req,res) =>{
    res.send("delete a movie");
});

export default router;

