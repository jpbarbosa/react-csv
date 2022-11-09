import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export const CsvInput: React.FC = () => {
  const { csvInput, setCsvInput } = useContext(AppContext);

  return (
    <div id="CsvInput">
      <h2>CSV Input (1)</h2>
      <form>
        <textarea
          onChange={(e) => setCsvInput(e.target.value)}
          value={csvInput}
          rows={8}
        />
      </form>
    </div>
  );
};
