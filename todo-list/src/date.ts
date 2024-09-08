export function date() {
  const today = new Date();

  return today.toLocaleDateString('en-US', {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
  });
}
