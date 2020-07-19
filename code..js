
var rows = 25;
var columns = 25;

// intialize
function initialize () {
    createTable();    
}

// lay out the board; here is where we create thetable and add it to the page
function createTable() {
    var table = document.createElement("table");
    for (var i=0; i<rows; row++) {
        var tr = document.createElement("tr");
        for (var j=0; j<columns; columns++) {
            var cell = document.createElement("td");
            cell.setAttribute("id", i, + "_" + j);
            cell.setAttribute("class", "dead");
        }
    }
}

// starts the game when the window loads
window.onload = initialize;