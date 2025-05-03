export function highlightPath(path) {
    clearHighlights();
    path.forEach(([row, col], index) => {
      const square = document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`);
      if (square) {
        square.classList.add('path');
        square.textContent = index;
      }
    });
  }
  
  export function clearHighlights() {
    document.querySelectorAll('.square').forEach(square => {
      square.classList.remove('path');
      square.textContent = '';
    });
  }
  