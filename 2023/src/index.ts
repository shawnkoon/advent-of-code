import day1 from './day1';

type Challenge = () => Promise<string>;

class AdventOfCode2023 {
  private challenges: Challenge[];

  constructor() {
    this.challenges = [day1];
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
