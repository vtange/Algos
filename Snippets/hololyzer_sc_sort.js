var arr = [];

document.querySelectorAll(".main-table tr:not(:nth-child(2n)) td:nth-last-child(2)").forEach(function(name){arr.push(name.textContent)})

arr.sort((a, b) => b.localeCompare(a, "ja", {sensitivity: 'base'}))

var rows = [];
document.querySelectorAll(".main-table tr:not(:nth-child(2n))").forEach(function(row1){rows.push([row1])});
document.querySelectorAll(".main-table tr:nth-child(2n)").forEach(function(row2,idx){rows[idx].push(row2)});
var table_top_row = rows.shift();

function exampleSort(arr, exampleArr){
    if(arr.length !== exampleArr.length) {
        console.warn("arr length not matched with exampleArr");
    }
	var seen = Object.create(null);
	for(var i=0;i<exampleArr.length;i++)
	{
		if(!seen[exampleArr[i]])
		{
			//save first index we see for this array
			seen[exampleArr[i]] = i;
		}
	}
    // seen will be object full of usernames for key, value is index.
	return arr.sort( (x,y) => seen[x[0].querySelector("td:nth-last-child(2)").textContent] - seen[y[0].querySelector("td:nth-last-child(2)").textContent] );
}
exampleSort(rows,arr);
var tbody = document.querySelector(".main-table tbody");
if(tbody) {
    tbody.innerHTML = "";
    tbody.appendChild(table_top_row[0]);
    tbody.appendChild(table_top_row[1]);
    rows.forEach(function(row){
        tbody.appendChild(row[0]);
        tbody.appendChild(row[1]);
    });
} else {
    console.warn("no tbody");
}
