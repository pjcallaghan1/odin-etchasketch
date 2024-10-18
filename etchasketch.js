const grid = document.querySelector('.grid');
const size = document.querySelector('.grid_size');
const reset = document.querySelector('.reset');

function makeSquare(rows, cols) {

    for (i = 0; i < rows; i++){
        //Making Rows and Columns
        var row = document.createElement('div');
        row.className = 'row'
        grid.appendChild(row);
        for (j = 0; j < cols; j++){
            let cell = document.createElement('div');
            row.appendChild(cell).className = 'cell';
            //Changes color of cell  
            cell.addEventListener('mouseover', function () {
                cell.style.backgroundColor = 'black';
            })    
        }
    }
};


makeSquare(16,16)

size.addEventListener('click', function() {
    let userInput = prompt('Enter how many squares you would like on each side. (Max 100)');
    grid.innerHTML = '';
    if (userInput > 0 && userInput <= 100) {
        makeSquare(userInput,userInput);
    } else {
        makeSquare(16,16);
        alert('Please enter a valid number between 1 and 100');
    }
});

reset.addEventListener('click', function() {
    grid.innerHTML = '';
    makeSquare(16,16);
    alert('Reset grid size and color!');
});
