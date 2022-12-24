// is null or undefined

export const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};

//is Object

export const isObject = (value) => {
  return typeof value === "object";
};
