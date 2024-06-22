function createGrid(rows, columns) {
    const gridContainer = document.querySelector(".container");

    // Create grid cells
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            row.appendChild(cell);
        }

        gridContainer.appendChild(row);
    }
}

createGrid(16, 16);
