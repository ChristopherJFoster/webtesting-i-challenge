const enhancer = require('./enhancer.js');
// test away!

it('should take in an item and return a new item with durability === 100', () => {
  const received = {
    name: 'Sword of Regret',
    enhancement: 12,
    durability: 28
  };
  const expected = {
    name: 'Sword of Regret',
    enhancement: 12,
    durability: 100
  };
  expect(enhancer.repair(received)).toEqual(expected);
});

it('should take in an item and return a new item with enhancement + 1 (up to a max of 20)', () => {
  const received = {
    name: 'Sword of Regret',
    enhancement: 12,
    durability: 28
  };
  const expected = {
    name: 'Sword of Regret',
    enhancement: 13,
    durability: 28
  };
  expect(enhancer.succeed(received)).toEqual(expected);
});
