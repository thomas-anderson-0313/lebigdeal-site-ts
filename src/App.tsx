import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Astropro1 from './routes/astropro1';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/astropro1" element = {<Astropro1 />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
