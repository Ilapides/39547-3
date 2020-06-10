/*
This part of the program helps to provide a function for Columns.
So first of all I created a function that creates a Column.
Secondly, I used for loop that will allow to continue the process until the 
user wants to give command. 
So for example it will help the user to draw the number of columns, So I included this 
part of program in my html file and then these two files will work together.
This part will basically create number of columns or add columns to the Grid.
*/

var colCount = 0; 

/*
function createColumns(colNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < colNum; j++) {
            let newCol = document.createElement("GRID");
            rows[j].appendChild(newCol).className = "GridColumn";
        };

    };
};
*/
function addC() 
{

    if (table.rows.length == 0) 
    {
        var row = table.insertRow(0);
        rowCount++;
    }

    for (var i = 0; i < rowCount; i++) 
    {
        var row = table.rows.item(i);
        let newCell = row.insertCell(0);
    }

    colCount++;

    refreshTableIds();
}

/* Used if statement in order to count how many rows do i have already or if i have none. Then using for loop
to create rows in the grid. */