const gridContainer = document.querySelector('.gridContainer');
const gridSizePromptButton = document.querySelector('button');
let gridSize = 0;
function getRandomNumber(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random()* (maxFloored - minCeiled) + minCeiled);
}
gridSizePromptButton.addEventListener('click', () => {
    const removeChild = document.querySelectorAll('.gridContainer div');
    
    removeChild.forEach((child) => {
        gridContainer.removeChild(child);
    })
    console.log(removeChild);
    gridSize = +(prompt("Enter Grid Size (Please Enter a number between 1 and 100)", "64"));
    while(gridSize <= 0 || gridSize > 100){
        gridSize = +(prompt("Enter Grid Size (Please Enter a number between 1 and 100)", "64"));
    }

    
    for(let i = 0; i < gridSize; i++){
        
        for (let j = 0; j < gridSize; j++){
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.addEventListener('mouseenter', (e) => {
                let redColor = getRandomNumber(1, 255);
                let greenColor = getRandomNumber(1, 255);
                let blueColor = getRandomNumber(1, 255);
                
                console.log(`rgb(${redColor}, ${greenColor}, ${blueColor})`);
                gridItem.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
                // gridItem.style.setProperty('--grid-size', gridSize);
            });
        
            gridContainer.appendChild(gridItem);
            console.log(gridContainer);
        }

    }
});