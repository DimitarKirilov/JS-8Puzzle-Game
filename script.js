var solution = [1, 2, 3, 4, 5, 6, 7, 8];

//trackers
var solved = 0;
var moves = 0;

function getCells(){
    var cell1 = document.getElementById("1");
    var cell2 = document.getElementById("2");
    var cell3 = document.getElementById("3");
    var cell4 = document.getElementById("4");
    var cell5 = document.getElementById("5");
    var cell6 = document.getElementById("6");
    var cell7 = document.getElementById("7");
    var cell8 = document.getElementById("8");
    var cell9 = document.getElementById("9");
}

function reset(){
    //reset moves
    moves = 0;
    document.getElementsByTagName("p")[0].innerHTML = "Moves: 0";

    //get each table cell
    getCells();

    //create array with the numbers
    var table = [1,2,3,4,5,6,7,8, " "];

    //randomize the number positions
    shuffle(table);
    
    //fill html table with the randomized numbers
    for(var i = 0; i < 9; i++){
        var cell = document.getElementsByTagName("td")[i];
        cell.innerHTML = table[i];
    }
}

function shuffle(array){
    var temp;
    var index;
    var counter = array.length;
    
    // While there are elements in the array
    while (counter > 0) {
    
        // Pick a random index
        index = Math.floor(Math.random() * counter);
    
        // Decrease counter by 1
        counter--;
    
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    
    return array.length;
}

//check if solved
function checkGame(){

    //compare to solution
    for(var i = 0; i < 8; i++){
        var cell = document.getElementsByTagName("td")[i];
        if (cell.innerHTML == solution[i])  solved = 1;

        //end loop if missmatch
        else {
            solved = 0;
            break;
        }
    }

    //display win message
    if (solved && moves)   alert("You did it! Moves: " + moves);  
}

function move(cell){
    
    //get each cell again
    var cell1 = document.getElementById("1");
    var cell2 = document.getElementById("2");
    var cell3 = document.getElementById("3");
    var cell4 = document.getElementById("4");
    var cell5 = document.getElementById("5");
    var cell6 = document.getElementById("6");
    var cell7 = document.getElementById("7");
    var cell8 = document.getElementById("8");
    var cell9 = document.getElementById("9");

    //determines where can move and move
    switch (cell){
        case 1:
            if (cell2.innerHTML == " "){
                cell2.innerHTML = cell1.innerHTML;
                cell1.innerHTML = " ";
                updateMoves()
            } 
            else if (cell4.innerHTML == " "){
                cell4.innerHTML = cell1.innerHTML;
                cell1.innerHTML = " ";
                updateMoves()
            }
            break;

        case 2:
            if (cell1.innerHTML == " "){
                cell1.innerHTML = cell2.innerHTML;
                cell2.innerHTML = " ";
                updateMoves()
            } 
            else if (cell3.innerHTML == " "){
                cell3.innerHTML = cell2.innerHTML;
                cell2.innerHTML = " ";
                updateMoves()
            } 
            else if (cell5.innerHTML == " "){
                cell5.innerHTML = cell2.innerHTML;
                cell2.innerHTML = " ";
                updateMoves()
            }
            break;

        case 3:
            if (cell2.innerHTML == " "){
                cell2.innerHTML = cell3.innerHTML;
                cell3.innerHTML = " ";
                updateMoves()
            } 
            else if (cell6.innerHTML == " "){
                cell6.innerHTML = cell3.innerHTML;
                cell3.innerHTML = " ";
                updateMoves()
            }
            break;

        case 4:
            if (cell1.innerHTML == " "){
                cell1.innerHTML = cell4.innerHTML;
                cell4.innerHTML = " ";
                updateMoves()
            }
            else if (cell5.innerHTML == " "){
                cell5.innerHTML = cell4.innerHTML;
                cell4.innerHTML = " ";
                updateMoves()
            } 
            else if (cell7.innerHTML == " "){
                cell7.innerHTML = cell4.innerHTML;
                cell4.innerHTML = " ";
                updateMoves()
            }
            break;

        case 5:
            if (cell2.innerHTML == " "){
                cell2.innerHTML = cell5.innerHTML;
                cell5.innerHTML = " ";
                updateMoves()
            }
            else if (cell4.innerHTML == " "){
                cell4.innerHTML = cell5.innerHTML;
                cell5.innerHTML = " ";
                updateMoves()
            }
            else if (cell6.innerHTML == " "){
                cell6.innerHTML = cell5.innerHTML;
                cell5.innerHTML = " ";
                updateMoves()
            }
            else if (cell8.innerHTML == " "){
                cell8.innerHTML = cell5.innerHTML;
                cell5.innerHTML = " ";
                updateMoves()
            }
            break;

        case 6:
            if (cell3.innerHTML == " "){
                cell3.innerHTML = cell6.innerHTML;
                cell6.innerHTML = " ";
                updateMoves()
            }
            else if (cell5.innerHTML == " "){
                cell5.innerHTML = cell6.innerHTML;
                cell6.innerHTML = " ";
                updateMoves()
            }    
            else if (cell9.innerHTML == " "){
                cell9.innerHTML = cell6.innerHTML;
                cell6.innerHTML = " ";
                updateMoves()
            }
            break;

        case 7:
            if (cell4.innerHTML == " "){
                cell4.innerHTML = cell7.innerHTML;
                cell7.innerHTML = " ";
                updateMoves()
            }
            else if (cell8.innerHTML == " "){
                cell8.innerHTML = cell7.innerHTML;
                cell7.innerHTML = " ";
                updateMoves()
            }
            break;

        case 8:
            if (cell7.innerHTML == " "){
                cell7.innerHTML = cell8.innerHTML;
                cell8.innerHTML = " ";
                updateMoves()
            }
            else if (cell5.innerHTML == " "){
                cell5.innerHTML = cell8.innerHTML;
                cell8.innerHTML = " ";
                updateMoves()
            }
            else if (cell9.innerHTML == " "){
                cell9.innerHTML = cell8.innerHTML;
                cell8.innerHTML = " ";
                updateMoves()
            }
            break;

        case 9:
            if (cell8.innerHTML == " "){
                cell8.innerHTML = cell9.innerHTML;
                cell9.innerHTML = " ";
                updateMoves()
            }
            else if (cell6.innerHTML == " "){
                cell6.innerHTML = cell9.innerHTML;
                cell9.innerHTML = " ";
                updateMoves()
            }
            break;
    }

    //check if solved after the move
    checkGame();
}

function updateMoves(){
    moves ++;
    document.getElementsByTagName("p")[0].innerHTML = "Moves: " + moves;
}