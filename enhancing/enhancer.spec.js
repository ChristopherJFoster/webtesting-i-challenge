const enhancer = require('./enhancer.js');
// test away!

it('should take in an item and return a new item with durability === 100', () => {
  expect(
    enhancer.repair({
      name: 'Sword of Regret',
      enhancement: 12,
      durability: 28
    })
  ).toEqual({ name: 'Sword of Regret', enhancement: 12, durability: 100 });
});
