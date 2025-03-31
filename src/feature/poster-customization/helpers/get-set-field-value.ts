const getFieldValue = (obj: any, path: string): any => {
  return path.split('.').reduce((acc, key) => {
    const k = isNaN(Number(key)) ? key : Number(key);
    return acc?.[k];
  }, obj);
};

const setFieldValue = (obj: any, path: string, value: any): any => {
  const keys = path.split('.');
  const result = structuredClone(obj); // Deep clone
  let current = result;

  for (let i = 0; i < keys.length - 1; i++) {
    const k = isNaN(Number(keys[i])) ? keys[i] : Number(keys[i]);
    current = current[k];
  }

  const lastKey = keys[keys.length - 1];
  current[isNaN(Number(lastKey)) ? lastKey : Number(lastKey)] = value;

  return result;
};

export { getFieldValue, setFieldValue };
