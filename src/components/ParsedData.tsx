import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import { parseCsv } from '../helpers/parseCsv';

export const ParsedData: React.FC = () => {
  const { csvInput, parsedData, setParsedData } = useContext(AppContext);

  useEffect(() => {
    setParsedData(parseCsv(csvInput));
  }, [csvInput]);

  return (
    <div id="ParsedData">
      <h2>ParsedData (2)</h2>
      <pre>{JSON.stringify(parsedData, null, 2)}</pre>
    </div>
  );
};
