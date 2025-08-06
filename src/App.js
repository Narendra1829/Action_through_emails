import React, { useState } from 'react';
import TimeOffRequest from './components/TimeOffRequest';
import Confirmation from './components/Confirmation';
import './index.css';

function App() {
  const [approved, setApproved] = useState(false);

  return (
    <div className="app">
      {approved ? <Confirmation /> : <TimeOffRequest onApprove={() => setApproved(true)} />}
    </div>
  );
}

export default App;
