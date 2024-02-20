export const timeToString = (time: string | number | object | null): string => {
  if (!time) return "NO FINAL TIME";
  const timeToString = String(time);
  return timeToString;
};
