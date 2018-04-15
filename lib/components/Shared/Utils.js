export function round(number) {
  return isNaN(number) ? number : Math.round(number);
}

export function check(value) {
  return value || value === 0 ? round(value) : '-';
}
