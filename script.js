
var colCount = 0;
var rowCount = 0;
var chosenColor;


/*
Refresh table changes
*/
function refreshTableIds(){
	let table = document.getElementById("table");
	for (var i = 0; i < rowCount; i++) {
		for (var j = 0; j < colCount; j++) {
			var cell = table.rows[i].cells[j];
			cell.id = 'tdcell_' + i + "_" + j;
			cell.removeEventListener("click", onCellClick);
			cell.addEventListener("click", onCellClick);
		}
	}
}

/*
OnClick
*/
function onCellClick(event){
	var v = document.getElementById("SelectedID").value;
   if (v === "Select a Color") return;
   event.target.style.background = v;
}

/*
add rows to the grid
*/
function addR() {
	let table = document.getElementById("table");
	var row = table.insertRow(0);
	if (colCount == 0) {
		row.insertCell(0);
		colCount++;
	} 
	else{
		for (var i = 0; i < colCount; i++) {
			row.insertCell(0);
		}
	}
	rowCount++;
	refreshTableIds();
}

/*
add columns to the grid
*/
function addC(){
	let table = document.getElementById("table");
	if(table.rows.length === 0){
		var row = table.insertRow(0);
		rowCount++;
	}
	for (var i = 0; i < rowCount; i++){
		var row = table.rows.item(i);
		let newCell = row.insertCell(0);
	}
	colCount++;
	refreshTableIds();
}

/*
remove rows from the grid
*/
function removeR(){
	if (rowCount === 0) return;
	rowCount--;
	refreshTableIds();
}


/*
remove columns from the grid
*/

/*
select a color from a dropdown menu of colors
*/

/*
click on a single cell, changing its color to the currently selected color
*/

/*
fill all uncolored cells with the currently selected color
*/

/*
fill all cells with the currently selected color
*/

/*
clear all cells/restore all cells to their original/initial color
*/

/*
click and hold (mouseover) from a single cell (start) to a different cell (end) 
such that all affected/hovered-over cells from start to end change to the currently selected color
*/