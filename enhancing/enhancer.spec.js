const enhancer = require('./enhancer.js');
// test away!

it('item => new item with durability === 100', () => {
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

it('item => new item with enhancement + 1 (up to a max of 20)', () => {
  let received = {
    name: 'Sword of Regret',
    enhancement: 19,
    durability: 28
  };
  let expected = {
    name: 'Sword of Regret',
    enhancement: 20,
    durability: 28
  };
  expect(enhancer.succeed(received)).toEqual(expected);
  received = {
    name: 'Sword of Regret',
    enhancement: 20,
    durability: 28
  };
  expected = {
    name: 'Sword of Regret',
    enhancement: 20,
    durability: 28
  };
  expect(enhancer.succeed(received)).toEqual(expected);
});

it('item => new item with lower durability (-5/-10) and lower enhancment (-1) based on enhancement level', () => {
  let received = {
    name: 'Sword of Regret',
    enhancement: 13,
    durability: 28
  };
  let expected = {
    name: 'Sword of Regret',
    enhancement: 13,
    durability: 23
  };
  expect(enhancer.fail(received)).toEqual(expected);
  received = {
    name: 'Sword of Regret',
    enhancement: 15,
    durability: 7
  };
  expected = {
    name: 'Sword of Regret',
    enhancement: 15,
    durability: 0
  };
  expect(enhancer.fail(received)).toEqual(expected);
  received = {
    name: 'Sword of Regret',
    enhancement: 19,
    durability: 42
  };
  expected = {
    name: 'Sword of Regret',
    enhancement: 18,
    durability: 32
  };
  expect(enhancer.fail(received)).toEqual(expected);
});
