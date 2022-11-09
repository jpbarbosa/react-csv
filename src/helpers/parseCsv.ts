import { unflatten } from 'flat';
import deepmerge from 'deepmerge';
import { GenericRecord, GenericRecordWithChildren } from '../types/records';

export const parseCsv = (csv: string) => {
  const rows = csv.trim().split('\n');
  const output: GenericRecordWithChildren[] = [];
  rows.forEach((row, index) => {
    if (index === 0) {
      return;
    }

    const headers = rows[0].split(',');
    const values = row.split(',');

    const record: GenericRecord = {};

    headers.forEach((header, index) => {
      const value = values[index];
      if (value) {
        record[header] = value;
      }
    });

    // Transform/parse dot notation properties into objects
    const unflattedRecord = unflatten<GenericRecord, GenericRecordWithChildren>(
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
