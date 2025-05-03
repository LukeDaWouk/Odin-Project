import { createBoard } from './board.js';
import { knightTravails } from './knight.js';
import { highlightPath } from './ui.js';

const boardContainer = document.querySelector('#board');
const startInput = document.querySelector('#start');
const endInput = document.querySelector('#end');
const goBtn = document.querySelector('#go');

createBoard(boardContainer);

goBtn.addEventListener('click', () => {
  const start = startInput.value.split(',').map(Number);
  const end = endInput.value.split(',').map(Number);

  if (start.length !== 2 || end.length !== 2) return alert('Invalid input!');

  const path = knightTravails(start, end);
  if (!path) return alert('No path found!');
  highlightPath(path);
});
