export function succeed(item) {
  const enhancement = item.enhancement === 20 ? 20 : item.enhancement + 1;
  return { ...item, enhancement };
}

export function fail(item) {
  const enhancement =
    item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;
  let durability =
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
  durability = durability < 0 ? 0 : durability;
  return { ...item, enhancement, durability };
}

export function repair(item) {
  return { ...item, durability: 100 };
}

export function get(item) {
  const name =
    item.enhancement === 0 ? item.name : `[+${item.enhancement}] ${item.name}`;
  return { ...item, name };
}
