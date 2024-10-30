import { useState } from 'react';
import { RootProvider } from './context/RootContext'
import Button from '@mui/material/Button';

function App() {
  const [toggle, setToggle] = useState(true);
  
  return (
    <div className="App">
      <h1 className="text-base">Welcome to Smart Suggestions</h1>
      <div className="pt-5">
        <RootProvider value={toggle}>
          {toggle ?
            <Button variant="contained" onClick={() => setToggle(!toggle)}>Turn On</Button> : 
            <Button variant="contained" onClick={() => setToggle(!toggle)}>Turn Off</Button>
          }
        </RootProvider>
      </div>
    </div>
  );
}

export default App;