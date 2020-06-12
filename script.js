
var colCount = 0;
var rowCount = 0;
var depressed = false;
var chosenColor;
var table = document.getElementById("grid");

table.addEventListener('mousedown', function(){depressed = true});
table.addEventListener('mouseup', function(){depressed = false});

/*
function to create a cell with onclick and click and drag functionality
*/
function newCell(){
	let newC = document.createElement("td");
	newC.style.backgroundColor = "#ffffff";
	newC.onmouseclick = function(){
		this.style.backgroundColor = chosenColor;
	}
	newC.onmouseover = function () {
		if (depressed) this.style.backgroundColor = chosenColor;
	}
	return newC;
}


/*
add rows to the grid
*/
function addR(){
	// If there are no rows,  
	if (rowCount === 0){	
		// there will now be one row,
		rowCount++;
		// with one column
		colCount++;
		// Create new table row
		let addRow = document.createElement("tr");
		// Create new table data (aka cell)
		// let addCol = document.createElement("td");
		let addCol = newCell();
		// Add this 1-cell column to the row
		addRow.appendChild(addCol);
		// Add this Row X Column to the grid table
		table.appendChild(addRow);
	}
	// Otherwise, there is already at least one row and one column, so we only increment row and add colCount cells
	else{
		rowCount++;
		// Create new table row
		let addRow = document.createElement("tr");
		// Add colCount cells to the row
		for (let i = 0; i < colCount; i++){
			// Create new cell
			//let addCol = document.createElement("td");
			let addCol = newCell();
			// Append it to the row
			addRow.appendChild(addCol);
		}
		// Append the new row to the grid
		table.appendChild(addRow);
	}
}

/*
add columns to the grid
*/
function addC(){
	// If there are no columns,  
	if (colCount === 0){	
		// there will now be one row,
		rowCount++;
		// with one column
		colCount++;
		// Create new table row
		let addRow = document.createElement("tr");
		// Create new table data (aka cell)
		//let addCol = document.createElement("td");
		let addCol = newCell();
		// Add this 1-cell column to the row
		addRow.appendChild(addCol);
		// Add this Row X Column to the grid table
		table.appendChild(addRow);
	}
	// Otherwise, there is already at least one row and one column, so we only increment colCount and add 1 cell to each row
	else{
		colCount++;
		// Add 1 cell to each row
		let rows = table.getElementsByTagName("tr");
		for (let i = 0; i < rowCount; i++){
			// Create new cell
			//let addCol = document.createElement("td");
			let addCol = newCell();
			// Append it to the row
			rows[i].appendChild(addCol);
		}
	}
}

/*
remove rows from the grid
*/
function removeR(){
	// If there are no rows, there is nothing to be done
	if (rowCount === 0) return;
	// Otherwise, decrement rowCount
	rowCount--;
	// If rowCount is now 0, colCount must also be 0
	if (rowCount === 0) colCount = 0;
	// Remove the last row
	table.removeChild(table.lastElementChild);
}

/*
remove columns from the grid
*/
function removeC(){
	// If there are no columns, there is nothing to be done
	if (colCount === 0) return;
	// Otherwise, decrement colCount
	colCount--;
	// Select all rows
	let rows = table.getElementsByTagName("tr");
	// Iterate through them
	for (let i = 0; i < rowCount; i++){
		// Remove their last cell
		rows[i].removeChild(rows[i].lastElementChild);
	}
	// If there are no more columns, there are no more rows
	if (colCount === 0) rowCount = 0;
}


/*
select a color from a dropdown menu of colors
*/
function Selected(){
	chosenColor = document.getElementById("Colors").value;
}

/*
click on a single cell, changing its color to the currently selected color
*/


/*
fill all uncolored cells with the currently selected color
*/

/*
fill all cells with the currently selected color
*/
function fill(){
	let rows = table.getElementsByTagName("tr");
	for (var h = 0; h < rowCount; h++){
		let cells = rows[h].getElementsByTagName("td");
		for (var i = 0; i < colCount; i++){
			cells[i].style.backgroundColor = chosenColor;
		}	
	};
}


/*
clear all cells/restore all cells to their original/initial color
*/
function Clear(){
	let rows = table.getElementsByTagName("tr");
	for (var h = 0; h < rowCount; h++){
		let cells = rows[h].getElementsByTagName("td");
		for (var i = 0; i < colCount; i++){
			cells[i].style.backgroundColor = "white"
		}	
	};
}

/*
click and hold (mouseover) from a single cell (start) to a different cell (end) 
such that all affected/hovered-over cells from start to end change to the currently selected color
*/