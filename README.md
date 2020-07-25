# game_of_life

This is a one-page browser-based app that implements the Game of Life.  Each square in our grid can hold a living cell.  For every square on the grid, the cell can be in one of the two states: living or dead.  If the square holds a living cell, it is filled in.  Otherwise, it is blank.

- If a cell has fewer than two living adjacent neighbors then the cell dies, by under-population. If a cell dies, don't mark it on the second sheet.
- If a cell has two or three live neighbors, it lives on to the next generation, so mark it on the second sheet.
- If a live cell has more than three live neighbors, it dies because of overcrowding, so don't mark it on the second sheet.
- Finally, if any dead cell has exactly three live neighbors, it becomes a live cell by reproduction, so mark it as live on the second sheet.


1) Grid VIEW in Browser
The first component is going to be the view we see in the browser. This is largely going to be done using HTML and CSS, and will provide us with a visual, clickable grid as well as a set of buttons to control the game.

2) CONTROLLER code for start, pause, continue, and random buttons
Next we'll have some code that takes care of handling the user's actions, whether the user is clicking on the grid, or one of the buttons. Say, the user clicks on a cell in the grid, this code make sure everything happens behind the scenes to reflect that change in the grid.

3) Grid MODEL or data structure and code to compute cell generations
Finally, we have the data structure (some people call this the model), which tracks the state of the grid, and knows how to compute future generations of the grid.


Technologies Used: 

HTML
CSS
Javascript


