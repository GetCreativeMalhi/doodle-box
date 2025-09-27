const gridContainer = document.querySelector('.gridContainer');
const rows = 100;
const columns = 100;


for(let i = 0; i < rows; i++){

    for (let j = 0; j < columns; j++){
        const gridItem = document.createElement('div');

        gridItem.className = 'grid-item';
        gridItem.addEventListener('mouseenter', (e) => {
            gridItem.style.backgroundColor = "#444444";
        })
        
        gridContainer.appendChild(gridItem);
    }

}