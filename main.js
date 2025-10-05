import express from 'express';

const app = express();
const PORT = 6969;

app.get('/', (req, res) =>{
    res.json({msg:"hello students!"})
});

// CRUD functionalities of a movie 

//R- for Reading the movies
app.get('/movies',() =>{

});

// C- for Creating a movie
app.post('/movies',() =>{

});


// U- for Updating a movie
app.put('/movies/:id',() =>{

});

app.delete('/movies/:id',() =>{

});


// D - for Deleting movie
app.listen(PORT,() =>{
    console.log(`The server is running at http://localhost:${PORT}`)
});    