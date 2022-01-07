const fs = require("fs");
require("dotenv").config();
const Movie = require("../models/Movie");

const addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
  } catch (error) {
    console.log(error);
  }
};

const editMovie = async (userQuery, userUpdate) => {
  try {
    await Movie.findOneAndUpdate({ title: userQuery }, { title: userUpdate });
  } catch (error) {
    console.log(error);
  }
};

const listMovies = async () => {
  try {
    let list = await Movie.find({});
    console.log("Here's your collection: ", list);
  } catch (error) {
    console.log(error);
  }
};

const deleteMovies = async (queryObj) => {
  try {
    await Movie.deleteOne(queryObj);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMovie, editMovie, listMovies, deleteMovies };
