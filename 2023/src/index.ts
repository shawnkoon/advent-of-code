import { day1_part1, day1_part2 } from './day1';
import { day2_part1, day2_part2 } from './day2';

type Challenge = () => Promise<string | number>;

class AdventOfCode2023 {
  private challenges: Challenge[];

  constructor() {
    this.challenges = [day1_part1, day1_part2, day2_part1, day2_part2];
  }

  async run() {
    for (let s of this.challenges) {
      let sol = await s();
      console.log(`${s.name} - ${sol}`);
    }
  }
}

const runner = new AdventOfCode2023();

runner.run();
