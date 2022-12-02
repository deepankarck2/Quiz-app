import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TakeQuiz from './pages/TakeQuiz'
import Home  from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/take' element={<TakeQuiz />}  />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
