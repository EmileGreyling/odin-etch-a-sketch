function createGrid(gridSize) {
    const gridContainer = document.querySelector(".container");

    // Create grid cells
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.style.width = `${(850) / (gridSize)}px`;
            cell.style.height = `${(850) / (gridSize)}px`;
            cell.classList.add("cell");

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = '#a0bded';
            });

            row.appendChild(cell);
        }

        gridContainer.appendChild(row);
    }
}

function changeGridSize() {
    const newGridSize = prompt('Enter size for the new grid:');

    if (!(newGridSize <= 100 && newGridSize >= 4)) {
        alert('Value must be between 4 and 100!');
        return;
    }
    
    // Remove old grid
    document.querySelector('.container').innerHTML = '';

    createGrid(newGridSize);
}

createGrid(16);
