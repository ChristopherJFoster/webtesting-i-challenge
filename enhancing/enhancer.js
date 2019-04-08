module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  const enhancement = item.enhancement === 20 ? 20 : item.enhancement + 1;
  return { ...item, enhancement };
}

function fail(item) {
  const enhancement =
    item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;
  let durability =
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
  durability = durability < 0 ? 0 : durability;
  return { ...item, enhancement, durability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  const name =
    item.enhancement === 0 ? item.name : `[+${item.enhancement}] ${item.name}`;
  return { ...item, name };
}
