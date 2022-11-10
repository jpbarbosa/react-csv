import flatten from 'flat';
import { FlattenedRecord, UnflattenedRecord } from '../types/records';

export const flattenData = (data: UnflattenedRecord[]) => {
  const output: FlattenedRecord[] = [];

  data.forEach((item) => {
    let maxSubItems = 0;
    let record: UnflattenedRecord = {};
    let subItems: UnflattenedRecord = {};
    Object.keys(item).forEach((key) => {
      const value = item[key];
      if (Array.isArray(value)) {
        if (value.length > maxSubItems) {
          maxSubItems = value.length;
        }
        subItems[key] = value;
      } else {
        record[key] = value;
      }
    });
    for (let i = 0; i < maxSubItems; i++) {
      Object.keys(subItems).forEach((key) => {
        record[`${key}.0`] = subItems[key][i];
      });
      output.push(flatten(record));
    }
  });

  return output;
};
