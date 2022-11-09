import flatten from 'flat';

export const flattenData = (data: Record<string, any>[]) => {
  const output: Record<string, any>[] = [];

  data.forEach((item) => {
    let maxSubItems = 0;
    let baseItem: Record<string, any> = {};
    let children: Record<string, []> = {};
    Object.keys(item).forEach((key) => {
      if (Array.isArray(item[key])) {
        if (item[key].length > maxSubItems) {
          maxSubItems = item[key].length;
        }
        children[key] = item[key];
      } else {
        baseItem[key] = item[key];
      }
    });
    for (let i = 0; i < maxSubItems; i++) {
      Object.keys(children).forEach((key) => {
        baseItem[`${key}.0`] = children[key][i];
      });
      output.push(flatten(baseItem));
    }
  });

  return output;
};
