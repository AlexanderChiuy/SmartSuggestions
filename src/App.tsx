import { useState } from 'react';
import { RootProvider } from './context/RootContext'
import SuggestionFrame from './components/SuggestionFrame'
import Button from '@mui/material/Button';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  
  return (
    <div className="App">
      <h1 className="flex flex-center grow w-max text-center text-xl font-bold">Welcome to Smart Suggestions</h1>
      <div className="py-8">
        <RootProvider value={toggle}>
          <div className="content-center text-center m-4">
            {toggle ?
              <Button endIcon={<PowerSettingsNewIcon />} variant="contained" onClick={() => setToggle(!toggle)}>Turn On</Button> : 
              <Button endIcon={<PowerSettingsNewIcon />} variant="contained" onClick={() => setToggle(!toggle)}>Turn Off</Button>
            }
          </div>
          <SuggestionFrame />
        </RootProvider>
      </div>
    </div>
  );
}

export default App;
