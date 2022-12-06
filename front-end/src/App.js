import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TakeQuiz from './pages/TakeQuiz'
import Home  from './pages/Home';
import Login from './pages/Login';
import Register from './pages/register';
import Random from './pages/RandomQuiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/take' element={<TakeQuiz />}  />
              <Route path='/login' element={<Login />}  />
              <Route path='/register' element={<Register />}  />
              <Route path='/random' element={<Random />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
