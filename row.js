/*
This part of the program helps to provide a function for Rows.
So first of all I created a function that creates a Row.
Secondly, I used for loop that will allow to continue the process until the 
user wants to give command. 
So for example it will help the user to draw the number of rows, So I included this 
part of program in my html file and then these two files will work together.
This part will basically create number of row or add rows to the Grid
*/
function createRows(rowNum) 
{
    for (i = 0; i < rowNum; i++) 
    {
        let row = document.createElement("GRow");
        container.appendChild(row).className = "GridRow";
    };
};