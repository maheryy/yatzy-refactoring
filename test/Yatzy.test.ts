import assert from 'assert';

import Yatzy from '../src/Yatzy';

describe('Chance', () => {
  it('should score the sum of all dice', () => {
    assert.strictEqual(Yatzy.chance(2, 3, 4, 5, 1), 15);
    assert.strictEqual(Yatzy.chance(3, 3, 4, 5, 1), 16);
  });
});

describe('Yatzy', () => {
  it('should score 50 when all dice have the same value', () => {
    assert.strictEqual(Yatzy.yatzy(4, 4, 4, 4, 4), 50);
    assert.strictEqual(Yatzy.yatzy(6, 6, 6, 6, 6), 50);
  });

  it('should score 0 when at least one dice is different', () => {
    assert.strictEqual(Yatzy.yatzy(6, 6, 6, 6, 3), 0);
    assert.strictEqual(Yatzy.yatzy(6, 6, 6, 6, 3), 0);
  });
});

describe('Ones', () => {
  it('should score the sum of 1 values', () => {
    assert.strictEqual(Yatzy.ones(1, 2, 3, 4, 5), 1);
    assert.strictEqual(Yatzy.ones(1, 2, 1, 4, 5), 2);
    assert.strictEqual(Yatzy.ones(1, 2, 1, 1, 1), 4);
  });

  it('should score 0 when none of the dice is 1', () => {
    assert.strictEqual(Yatzy.ones(6, 2, 2, 4, 5), 0);
  });
});

describe('Twos', () => {
  it('should score the sum of 2 values', () => {
    assert.strictEqual(Yatzy.twos(1, 2, 3, 2, 6), 4);
    assert.strictEqual(Yatzy.twos(2, 2, 2, 2, 2), 10);
  });

  it('should score 0 when none of the dice is 2', () => {
    assert.strictEqual(Yatzy.twos(6, 3, 1, 4, 5), 0);
  });
});

describe('Threes', () => {
  it('should score the sum of 3 values', () => {
    assert.strictEqual(Yatzy.threes(1, 2, 3, 2, 3), 6);
    assert.strictEqual(Yatzy.threes(2, 3, 3, 3, 3), 12);
  });

  it('should score 0 when none of the dice is 3', () => {
    assert.strictEqual(Yatzy.threes(6, 2, 2, 4, 5), 0);
  });
});

describe('Fours', () => {
  it('should score the sum of 4 values', () => {
    assert.strictEqual(new Yatzy(4, 4, 4, 5, 5).fours(), 12);
    assert.strictEqual(new Yatzy(4, 4, 5, 5, 5).fours(), 8);
    assert.strictEqual(new Yatzy(4, 5, 5, 5, 5).fours(), 4);
  });

  it('should score 0 when none of the dice is 4', () => {
    assert.strictEqual(new Yatzy(5, 5, 3, 2, 1).fours(), 0);
  });
});

describe('Fives', () => {
  it('should score the sum of 5 values', () => {
    assert.strictEqual(new Yatzy(4, 4, 4, 5, 5).fives(), 10);
    assert.strictEqual(new Yatzy(4, 4, 5, 5, 5).fives(), 15);
    assert.strictEqual(new Yatzy(4, 5, 5, 5, 5).fives(), 20);
  });

  it('should score 0 when none of the dice is 5', () => {
    assert.strictEqual(new Yatzy(4, 6, 3, 2, 1).fives(), 0);
  });
});

describe('Sixes', () => {
  it('should score the sum of 6 values', () => {
    assert.strictEqual(new Yatzy(4, 4, 4, 5, 5).sixes(), 0);
    assert.strictEqual(new Yatzy(4, 4, 6, 5, 5).sixes(), 6);
    assert.strictEqual(new Yatzy(6, 5, 6, 6, 5).sixes(), 18);
  });

  it('should score 0 when none of the dice is 6', () => {
    assert.strictEqual(new Yatzy(5, 5, 3, 2, 1).sixes(), 0);
  });
});

describe('One pair', () => {
  it('scores the sum of the highest pair', () => {
    assert.strictEqual(6, Yatzy.score_pair(3, 4, 3, 5, 6));
    assert.strictEqual(10, Yatzy.score_pair(5, 3, 3, 3, 5));
    assert.strictEqual(12, Yatzy.score_pair(5, 3, 6, 6, 5));
  });
});

describe('Two pair', () => {
  it('scores the sum of the two pairs', () => {
    assert.strictEqual(16, Yatzy.two_pair(3, 3, 5, 4, 5));
    assert.strictEqual(16, Yatzy.two_pair(3, 3, 5, 5, 5));
  });
});

describe('Three of a kind', () => {
  it('scores the sum of the three of the kind', () => {
    assert.strictEqual(9, Yatzy.three_of_a_kind(3, 3, 3, 4, 5));
    assert.strictEqual(15, Yatzy.three_of_a_kind(5, 3, 5, 4, 5));
    assert.strictEqual(9, Yatzy.three_of_a_kind(3, 3, 3, 3, 5));
  });
});

describe('Four of a kind', () => {
  it('scores the sum of the four of the kind', () => {
    assert.strictEqual(12, Yatzy.four_of_a_kind(3, 3, 3, 3, 5));
    assert.strictEqual(20, Yatzy.four_of_a_kind(5, 5, 5, 4, 5));
    assert.strictEqual(9, Yatzy.three_of_a_kind(3, 3, 3, 3, 3));
  });
});

describe('Small straight', () => {
  it('scores 15', () => {
    assert.strictEqual(15, Yatzy.smallStraight(1, 2, 3, 4, 5));
    assert.strictEqual(15, Yatzy.smallStraight(2, 3, 4, 5, 1));
    assert.strictEqual(0, Yatzy.smallStraight(1, 2, 2, 4, 5));
  });
});

describe('Large straight', () => {
  it('scores 20', () => {
    assert.strictEqual(20, Yatzy.largeStraight(6, 2, 3, 4, 5));
    assert.strictEqual(20, Yatzy.largeStraight(2, 3, 4, 5, 6));
    assert.strictEqual(0, Yatzy.largeStraight(1, 2, 2, 4, 5));
  });
});

describe('Full house', () => {
  it('scores the sum of the full house', () => {
    assert.strictEqual(18, Yatzy.fullHouse(6, 2, 2, 2, 6));
    assert.strictEqual(0, Yatzy.fullHouse(2, 3, 4, 5, 6));
  });
});
