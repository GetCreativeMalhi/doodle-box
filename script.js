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
    gridSize = +(prompt("Enter Grid Size (Please Enter a number between 1 and 100)", "64"));
    while(gridSize <= 0 || gridSize > 100){
        gridSize = +(prompt("Enter Grid Size (Please Enter a number between 1 and 100)", "64"));
    }

    
    for(let i = 0; i < gridSize; i++){
        
        for (let j = 0; j < gridSize; j++){
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            let mouseEnterCounter = 0;
            gridItem.addEventListener('mouseenter', (e) => {
                let redColor = getRandomNumber(1, 255);
                let greenColor = getRandomNumber(1, 255);
                let blueColor = getRandomNumber(1, 255);
                mouseEnterCounter++;
                const gridItemColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
                gridItem.style.backgroundColor = gridItemColor;
                switch(mouseEnterCounter){
                    case 1:
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        break;
                    case 2:
                        
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        break;
                    case 3:
                       
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        break;
                    case 4:
                        
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        break;
                    case 5:
                       
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        break;
                    case 6:
                        
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        break;
                    case 7:
                        
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        break;
                    case 8:
                        
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        break;
                    case 9:
                       
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        break;
                    case 10:
                        
                        gridItem.style.filter = `brightness(${100 - (mouseEnterCounter * 10)}%)`;
                        console.log(mouseEnterCounter);

                    default:
                        mouseEnterCounter = Math.min(mouseEnterCounter, 10);

                }
               
            });
        
            gridContainer.appendChild(gridItem);
        }

    }
});