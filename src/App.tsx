import people from './data/people';
import { CsvInput } from './components/CsvInput';
import { ParsedData } from './components/ParsedData';
import { ResultList } from './components/ResultList';
import { AppContextProvider } from './contexts/AppContext';

function App() {
  return (
    <AppContextProvider initialData={people}>
      <div className="App">
        <div id="MainData">
          <CsvInput />
          <ResultList />
        </div>
        <ParsedData />
      </div>
    </AppContextProvider>
  );
}

export default App;
