/*
This part of the program helps to provide a function for Rows.
So first of all I created a function that creates a Row.
Secondly, I used for loop that will allow to continue the process until the 
user wants to give command. 
So for example it will help the user to draw the number of rows, So I included this 
part of program in my html file and then these two files will work together.
This part will basically create number of row or add rows
*/

const table = document.getElementById("table");
//let rows = document.getElementsByClassName("GridRow");
var rowCount = 0;

/*
function createRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement("GRID");
        container.appendChild(row).className = "GridRow";
    };
};
*/

/*
Using 2 for loops to see what is the row count and what is the column count
*/ 
function refreshTableIds() {
    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {
            var cell = table.rows[i].cells[j];
            cell.id = 'tdcell_' + i + "_" + j;
            cell.removeEventListener("click", onCellClick);
            cell.addEventListener("click", onCellClick);
        }
    }
}


function onCellClick(event) {
    var v = document.getElementById("SelectedID").value;
    if (v == "Select a Color") return;
    event.target.style.background = v;
}

/*
This function will allow to add row to the grid so used if and else statemnet to see the column count and then add rows accordingly.
*/
function addR() {

    var row = table.insertRow(0);

    if (colCount == 0) {
        row.insertCell(0);
        colCount++;
    } else {
        for (var i = 0; i < colCount; i++) {
            row.insertCell(0);
        }
    }

    rowCount++;

    refreshTableIds();
}