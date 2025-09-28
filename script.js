const gridContainer = document.querySelector('.gridContainer');
const gridSizePromptButton = document.querySelector('button');
let gridSize = 0;
gridSizePromptButton.addEventListener('click', () => {
    gridSize = +(prompt("Enter Grid Size (Please Enter a number between 1 and 100)", "64"));
    while(gridSize <= 0 || gridSize > 100){
        gridSize = +(prompt("Enter Grid Size (Please Enter a number between 1 and 100)", "64"));
    }

    console.log(gridSize);
    for(let i = 0; i < gridSize; i++){
        console.log(gridSize);
        for (let j = 0; j < gridSize; j++){
            const gridItem = document.createElement('div');

            gridItem.className = 'grid-item';
            gridItem.addEventListener('mouseenter', (e) => {
                gridItem.style.backgroundColor = "#444444";
                // gridItem.style.setProperty('--grid-size', gridSize);
            });
        
            gridContainer.appendChild(gridItem);
        }

    }
});