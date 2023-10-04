import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  const tileAmount = 30;
  const divElements = [];

  for (let i = 1; i <= tileAmount; i += 1) {
    divElements.push(<div key={i}>Div {i}</div>);
  }

  return (
    <div id="mainField">
      <div className="parentBoard">{divElements}</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
