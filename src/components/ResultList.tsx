import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { flattenData } from '../helpers/flattenData';

export const ResultList: React.FC = () => {
  const { parsedData } = useContext(AppContext);

  const flattenedData = flattenData(parsedData as Record<string, any>[]);

  if (!flattenedData.length) {
    return <div>No Data</div>;
  }

  const headers = Object.keys(flattenedData[0]);

  return (
    <div id="ResultList">
      <h2>Result List (3)</h2>
      <table border={1}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {flattenedData.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
