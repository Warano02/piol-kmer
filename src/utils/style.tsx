export const classNames = (...classes: (string | number | false | null | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const textResizer = (data: string, value = 10): string => {
  if (data?.length > value) {
    return data.slice(0, value) + "...";
  } else {
    return data;
  }
};