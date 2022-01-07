const yargs = require("yargs");
const { addMovie, editMovie, deleteMovies, listMovies } = require("./utils/index.js")
const fs = require("fs")

const connection = require("./db/connection")


const command = yargs.argv._[0];
console.log(yargs.argv)

const app = async (args) => {


    try {
        //check third word for "add"
        if (command === "add"){
            //use addMovie to upda
            const movie = await addMovie({title:args.title, actor: args.actor})
            console.log(`New movie: ${movie}`)
        }

        else if (command === "delete"){
            //use addMovie to update array with object from yargs and write to storage.json
            const movieObj = {title: args.title};
         
            await connection(deleteMovies, movieObj);
     
        }

        else if (command === "list"){
            //use addMovie to update array with object from yargs and write to storage.json
           listMovies()
     
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
        console.log(error)
        
    }
}


app(yargs.argv)