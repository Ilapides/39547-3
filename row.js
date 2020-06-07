function makeRows(rowNum) 
{
    for (i = 0; i < rowNum; i++) 
    {
        let row = document.createElement("GRow");
        container.appendChild(row).className = "GridRow";
    };
};