const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const {
  addMovie,
  editMovie,
  deleteMovies,
  listMovies,
} = require("./utils/index.js");
const fs = require("fs");

const connection = require("./db/connection");

const argv = yargs(hideBin(process.argv)).argv;
console.log(argv);

const app = async (args) => {
  try {
    //check third word for "add"
    if (argv.add) {
      //use addMovie to upda
      const movie = await addMovie({
        title: argv.title,
        actor: argv.actor,
        year: argv.year,
      });
      console.log(`New movie: ${movie}`);
    } else if (argv.delete) {
      //use addMovie to update array with object from yargs and write to storage.json

      deleteMovies({ title: argv.title });
    } else if (argv.list) {
      //use addMovie to update array with object from yargs and write to storage.json
      listMovies();
    }

    // else if (command === "delete")

    // addMovie(movieArray, {title: yargs.argv.title, actor: yargs.argv.actor});

    // else if (process.argv[2] === 'list'){
    //     listMovies(movieArray)
    // }
    // else if (process.argv[2] === 'delete'){
    //     console.log(process.argv[3])
    //     deleteMovies(movieArray, process.argv[3])

    // }
    // else if (process.argv[2] === 'edit' && process.argv[4] === 'to') {
    //     editMovie(movieArray, process.argv[3], process.argv[5])
    // }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
