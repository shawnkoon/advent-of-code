import { readFileLines } from '../utils';

export const day2_part1 = async (): Promise<number> => {
  let sum = 0;
  const MAX_RED = 12;
  const MAX_GREEN = 13;
  const MAX_BLUE = 14;
  const lines = await readFileLines(`${__dirname}/input.txt`);

  for (let l of lines) {
    const gRes = l.split(':');
    const gNumb = parseInt(gRes[0].split(' ')[1]);
    const games = gRes[1].split(';');
    const isPossible = games.every((game) => {
      const moves = game.split(',');

      return moves.every((move) => {
        const [countStr, color] = move.trim().split(' ');
        const count = parseInt(countStr);

        if (color.toLowerCase() === 'red') {
          return count <= MAX_RED;
        }
        if (color.toLowerCase() === 'green') {
          return count <= MAX_GREEN;
        }
        if (color.toLowerCase() === 'blue') {
          return count <= MAX_BLUE;
        }
      });
    });

    if (isPossible) {
      sum += gNumb;
    }
  }

  return sum;
};

export const day2_part2 = async (): Promise<number> => {
  const lines = await readFileLines(`${__dirname}/input.txt`);
  let sum = 0;

  for (let l of lines) {
    const gRes = l.split(':');
    const games = gRes[1].split(';');
    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;

    games.forEach((game) => {
      const moves = game.split(',');

      moves.forEach((move) => {
        const [countStr, color] = move.trim().split(' ');
        const count = parseInt(countStr);

        if (color.toLowerCase() === 'red') {
          maxRed = count > maxRed ? count : maxRed;
        }
        if (color.toLowerCase() === 'green') {
          maxGreen = count > maxGreen ? count : maxGreen;
        }
        if (color.toLowerCase() === 'blue') {
          maxBlue = count > maxBlue ? count : maxBlue;
        }
      });
    });

    sum += maxRed * maxGreen * maxBlue;
  }

  return sum;
};
