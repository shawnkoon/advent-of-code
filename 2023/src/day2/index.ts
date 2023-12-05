import { readFileLines } from '../utils';

export const day2_part1 = async (): Promise<number> => {
  let sum = 0;
  const MAX_RED = 12;
  const MAX_GREEN = 13;
  const MAX_BLUE = 14;
  let lines = await readFileLines(`${__dirname}/input.txt`);

  for (let l of lines) {
    const gRes = l.split(':');
    const gNumb = parseInt(gRes[0].split(' ')[1]);
    const games = gRes[1].split(';');
    const isPossible = games.every((game) => {
      const moves = game.split(',');

      return moves.every((move) => {
        const [count, color] = move.trim().split(' ');

        if (color.toLowerCase() === 'red') {
          return parseInt(count) <= MAX_RED;
        }
        if (color.toLowerCase() === 'green') {
          return parseInt(count) <= MAX_GREEN;
        }
        if (color.toLowerCase() === 'blue') {
          return parseInt(count) <= MAX_BLUE;
        }
      });
    });

    if (isPossible) {
      sum += gNumb;
    }
  }

  return sum;
};
