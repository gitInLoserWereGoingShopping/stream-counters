import { useState } from 'react';
import './App.css';

function App() {
  const [okCounter, setOkCounter] = useState(0);
  const [mumbleCounter, setMumbleCounter] = useState(0);

  const pleaseIncreaseOkCounterByOneThankYou = () => {
    const nextOkCounter = okCounter + 1;
    setOkCounter(nextOkCounter);
  };

  const pleaseAddOneToTheMumbles = function() {
    const nextMumbleCounter = mumbleCounter + 1;
    setMumbleCounter(nextMumbleCounter);
  }
  
  return (
    <div className='App-wrapper'>
      <div className='btn-group'>
        <button
          className='btn-ok-counter'
          onClick={pleaseIncreaseOkCounterByOneThankYou}>
          {`OK Counter: ${okCounter}`}
        </button>
        <div className='line-break'></div>
        <button
          className='btn-mumber-counter'
          onClick={pleaseAddOneToTheMumbles}>
          {`Mumble Counter: ${mumbleCounter}`}
        </button>
      </div>
    </div>
  );
}

export default App;
