const enhancer = require('./enhancer.js');
// test away!

it('item => new item with durability === 100', () => {
  const received = {
    name: 'Sword of Repair',
    enhancement: 12,
    durability: 28
  };
  const expected = {
    ...received,
    durability: 100
  };
  expect(enhancer.repair(received)).toEqual(expected);
});

it('item => new item with enhancement + 1 (up to a max of 20)', () => {
  let received = {
    name: 'Sword of Succeed',
    enhancement: 19,
    durability: 28
  };
  let expected = {
    ...received,
    enhancement: 20
  };
  expect(enhancer.succeed(received)).toEqual(expected);
  received = {
    ...received,
    enhancement: 20
  };
  expected = {
    ...received
  };
  expect(enhancer.succeed(received)).toEqual(expected);
});

it('item => new item with lower durability (-5/-10) and lower enhancment (-1) based on enhancement level', () => {
  let received = {
    name: 'Sword of Fail',
    enhancement: 13,
    durability: 28
  };
  let expected = {
    ...received,
    durability: 23
  };
  expect(enhancer.fail(received)).toEqual(expected);
  received = {
    ...received,
    enhancement: 15,
    durability: 7
  };
  expected = {
    ...received,
    durability: 0
  };
  expect(enhancer.fail(received)).toEqual(expected);
  received = {
    ...received,
    enhancement: 19,
    durability: 42
  };
  expected = {
    ...received,
    enhancement: 18,
    durability: 32
  };
  expect(enhancer.fail(received)).toEqual(expected);
});

it('item => new item with name that reflects enhancement level', () => {
  let received = {
    name: 'Sword of Get',
    enhancement: 17,
    durability: 28
  };
  let expected = {
    ...received,
    name: '[+17] Sword of Get'
  };
  expect(enhancer.get(received)).toEqual(expected);
  received = {
    ...received,
    enhancement: 0
  };
  expected = {
    ...received
  };
  expect(enhancer.get(received)).toEqual(expected);
});
