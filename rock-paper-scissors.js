//Importing the "process" library in order to access the arguments of command lines
const processLib = require('process');

//Gets the players move from the command line
const playerMoves = process.argv[2];

//Possible moves
const moves = ["rock", "paper", "scissors"];

//this function is to generate random moves
function randomMoves()
{
    const randomSelect = Math.floor(Math.random() * moves.length);
    return moves[randomSelect];
}

//gets computer move
const computerMoves = randomMoves();

//this function is to determine the winner
function Winner(player,computer)
{
    if(player == computer)
    {
        return console.log("\x1b[35m","The Game is Draw!");
    }
    
    if((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper"))
    {
        return console.log("\x1b[32m","You Win!");
    }
    return console.log("\x1b[31m","You Lost!");
}

//logging the moves output
console.log(`Player move: ${playerMoves}`);
console.log(`Computer move: ${computerMoves}`);

//Dtermining who is the winner
Winner(playerMoves, computerMoves);