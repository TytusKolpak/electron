import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

function Main() {
  const tileAmount = 30;
  const divElements = [];
  const [pos, setPos] = useState(1); // Initialize img position
  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        // Move the img to the top when the up arrow key is pressed
        setPos((oldValue) => (oldValue <= 5 ? oldValue : oldValue - 5));
        break;
      case 'ArrowRight':
        // Move the img to the right when the right arrow key is pressed
        setPos((oldValue) => (oldValue % 5 == 0 ? oldValue : oldValue + 1)); //modulo
        break;
      case 'ArrowLeft':
        // Move the img to the left when the left arrow key is pressed
        setPos((oldValue) =>  ((oldValue - 1) % 5 == 0 ? oldValue : oldValue - 1));
        break;
      case 'ArrowDown':
        // Move the img down when the down arrow key is pressed
        setPos((oldValue) => (oldValue >= 26 ? oldValue : oldValue + 5));
        break;
      case 'R':
        // Set img position to 1 when the 'r' key is pressed
        setPos(1);
        break;
      default:
        console.log('Default movement');
        break;
    }
  };

  useEffect(() => {
    console.log('addEventListener');
    window.addEventListener('keydown', handleKeyPress);

    // // Clean up the event listener when the component unmounts
    return () => {
      console.log('removeEventListener');
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Log pos whenever it changes
  useEffect(() => {
    console.log(pos);
  }, [pos]);

  for (let i = 1; i <= tileAmount; i += 1) {
    divElements.push(
      <div key={i} className="tile">
        <div className="tileNumber">{i}</div>
        {pos === i && <div className="ball"></div>}
      </div>,
    );
  }

  return (
    <div id="mainField">
      <div id="parentBoard">{divElements}</div>
      <div id="controlPanel">
        <h2>Player Selection Panel</h2>
        <div id="playerSelectionPanel">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
