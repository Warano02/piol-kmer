export const classNames = (...classes: (string | number | false | null | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};
