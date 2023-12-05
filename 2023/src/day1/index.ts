import { readFileLines } from '../utils';

// Return 0 if not found.
const startsWithNumber = (s: string): number => {
  const nMap: Map<string, number> = new Map([
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9],
  ]);

  for (let m of nMap) {
    if (s.startsWith(m[0])) {
      return m[1];
    }
  }
  return 0;
};

const isNumber = (c: string): boolean => {
  if (isNaN(parseInt(c))) {
    return false;
  }
  return true;
};

export const day1_part1 = async (): Promise<number> => {
  let sum = 0;
  let lines = await readFileLines(`${__dirname}/input.txt`);

  lines.forEach((str) => {
    let lMost = 0;
    let rMost = 0;

    // Find & Set lMost
    for (let i = 0; i < str.length; i++) {
      if (isNumber(str[i])) {
        lMost = parseInt(str[i]);
        break;
      }
    }

    // Find & Set rMost
    for (let i = str.length - 1; i >= 0; i--) {
      if (isNumber(str[i])) {
        rMost = parseInt(str[i]);
        break;
      }
    }
    sum += lMost * 10 + rMost;
  });

  return sum;
};

export const day1_part2 = async (): Promise<number> => {
  let sum = 0;
  let lines = await readFileLines(`${__dirname}/input.txt`);

  lines.forEach((str) => {
    let lMost = 0;
    let rMost = 0;

    // Find & Set lMost
    for (let i = 0; i < str.length; i++) {
      if (isNumber(str[i])) {
        lMost = parseInt(str[i]);
        break;
      }
      lMost = startsWithNumber(str.substring(i));
      if (lMost !== 0) {
        break;
      }
    }

    // Find & Set rMost
    for (let i = str.length - 1; i >= 0; i--) {
      if (isNumber(str[i])) {
        rMost = parseInt(str[i]);
        break;
      }
      rMost = startsWithNumber(str.substring(i));
      if (rMost !== 0) {
        break;
      }
    }
    sum += lMost * 10 + rMost;
  });

  return sum;
};
