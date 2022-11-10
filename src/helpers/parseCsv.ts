import { unflatten } from 'flat';
import deepmerge from 'deepmerge';
import { FlattenedRecord, UnflattenedRecord } from '../types/records';

export const parseCsv = (csv: string) => {
  const rows = csv.trim().split('\n');
  const output: UnflattenedRecord[] = [];
  rows.forEach((row, index) => {
    if (index === 0) {
      return;
    }

    const headers = rows[0].split(',');
    const values = row.split(',');

    const record: FlattenedRecord = {};

    headers.forEach((header, index) => {
      const value = values[index];
      if (value) {
        record[header] = value;
      }
    });

    // Transform/parse dot notation properties into objects
    const unflattedRecord = unflatten<FlattenedRecord, UnflattenedRecord>(
      record
    );

    const findRecordIndex = output.findIndex(
      (outputItem) => outputItem.id === record.id
    );

    if (findRecordIndex !== -1) {
      output[findRecordIndex] = deepmerge(
        output[findRecordIndex],
        unflattedRecord
      );
      return;
    }

    output.push(unflattedRecord);
  });

  return output;
};
