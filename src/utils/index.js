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

const editMovie = async () => {};

const listMovies = async () => {
  let list = await Movie.find({});
  console.log(list);
};

const deleteMovies = async (queryObj) => {
  try {
    await Movie.deleteOne(queryObj);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMovie, editMovie, listMovies, deleteMovies };
