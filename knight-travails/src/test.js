const knightMoves = require('./knightTravails');

function printPath(path) {
  if (!path) return console.log('No path found.');
  console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach(pos => console.log(`[${pos}]`));
}

// Test cases
printPath(knightMoves([0, 0], [1, 2]));
printPath(knightMoves([0, 0], [3, 3]));
printPath(knightMoves([3, 3], [0, 0]));
