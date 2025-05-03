export function createBoard(container) {
    container.innerHTML = '';
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.dataset.row = row;
        square.dataset.col = col;
        if ((row + col) % 2 === 0) {
          square.classList.add('light');
        } else {
          square.classList.add('dark');
        }
        container.appendChild(square);
      }
    }
  }
  