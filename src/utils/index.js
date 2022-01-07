const fs = require("fs");
require("dotenv").config()
const Movie = require("../models/models")


const addMovie = async ( movieObj) =>{
    
    try {
       const newMovie = new Movie(movieObj);
       await newMovie.save()
       
     
    } catch (error) {
        console.log(error)
        
    }
}

const editMovie = async () => {
    
    
}


const listMovies = async () => {
    let list  = await new Movie.find({})
    console.log(list)
}


const deleteMovies = async (title) => {
    try {
        let movie = Movie.findOne({title: title} )
        await Movie.delete(movie)
        console.log("Movie deleted")

      
     } catch (error) {
         console.log(error)
         
     }

}






module.exports = { addMovie, editMovie, listMovies, deleteMovies }