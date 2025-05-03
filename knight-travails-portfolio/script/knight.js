export function knightTravails(start, end) {
    const directions = [
      [1, 2], [2, 1], [2, -1], [1, -2],
      [-1, -2], [-2, -1], [-2, 1], [-1, 2],
    ];
  
    function isValid([x, y]) {
      return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
  
    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());
  
    while (queue.length > 0) {
      const path = queue.shift();
      const [x, y] = path[path.length - 1];
  
      if (x === end[0] && y === end[1]) return path;
  
      for (const [dx, dy] of directions) {
        const newPos = [x + dx, y + dy];
        if (isValid(newPos) && !visited.has(newPos.toString())) {
          visited.add(newPos.toString());
          queue.push([...path, newPos]);
        }
      }
    }
  
    return null;
  }
  