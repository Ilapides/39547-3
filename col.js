/*
This part of the program helps to provide a function for Columns.
So first of all I created a function that creates a Row.
Secondly, I used for loop that will allow to continue the process until the 
user wants to give command. 
So for example it will help the user to draw the number of columns, So I included this 
part of program in my html file and then these two files will work together.
This part will basically create number of columns or add columns to the Grid.
*/
function createColumns(colNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < colNum; j++) {
            let newCol = document.createElement("GCol");
            rows[j].appendChild(newCol).className = "GridColumn";
        };

    };
};

