import { countOccurrence, sum, sumOf } from './utils/math';

export default class Yatzy {
  private dice: number[];

  constructor(d1: number, d2: number, d3: number, d4: number, d5: number) {
    this.dice = [d1, d2, d3, d4, d5];
  }

  static chance(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return sum(d1, d2, d3, d4, d5);
  }

  static yatzy(...dice: number[]): number {
    return dice.some((d) => d !== dice[0]) ? 0 : 50;
  }

  static ones(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return sumOf(1, [d1, d2, d3, d4, d5]);
  }

  static twos(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return sumOf(2, [d1, d2, d3, d4, d5]);
  }

  static threes(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return sumOf(3, [d1, d2, d3, d4, d5]);
  }

  static onePair(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const allDice = [d1, d2, d3, d4, d5];
    return allDice.reduce(
      (highest, dice) =>
        countOccurrence(dice, allDice) >= 2 && dice * 2 > highest ? dice * 2 : highest,
      0
    );
  }

  static twoPairs(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const allDice = [d1, d2, d3, d4, d5];
    let firstPair: null | number = null;

    for (const dice of allDice) {
      // the current dice has no pair
      if (countOccurrence(dice, allDice) < 2) {
        continue;
      }

      // first pair
      if (firstPair === null) {
        firstPair = dice;
      }

      // the current dice has the same value as the first found pair
      if (firstPair === dice) {
        continue;
      }

      // second pair is found, so return the sum of both pairs
      return dice * 2 + firstPair * 2;
    }

    return 0;
  }

  static four_of_a_kind(_1: number, _2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[_1 - 1]++;
    tallies[_2 - 1]++;
    tallies[d3 - 1]++;
    tallies[d4 - 1]++;
    tallies[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
    return 0;
  }

  static three_of_a_kind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var t;
    t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    t[d1 - 1]++;
    t[d2 - 1]++;
    t[d3 - 1]++;
    t[d4 - 1]++;
    t[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (t[i] >= 3) return (i + 1) * 3;
    return 0;
  }

  static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1)
      return 15;
    return 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1)
      return 20;
    return 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    var _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    else return 0;
  }

  fours(): number {
    return sumOf(4, this.dice);
  }

  fives(): number {
    return sumOf(5, this.dice);
  }

  sixes(): number {
    return sumOf(6, this.dice);
  }
}
