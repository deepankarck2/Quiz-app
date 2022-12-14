import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TakeQuiz from './pages/TakeQuiz';
import Home  from './pages/Home';
import Login from './components/Login';
//import Login from './pages/Login';
import Register from './pages/register';
import Random from './pages/RandomQuiz';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/take' element={<TakeQuiz />}  />
              <Route path='/random' element={<Random />} />
              {/* <Route path='/login' element={<Login />}  /> */}
              
              <Route path='/login' element={<Login/>}  />
              <Route path='/register' element={<Register />}  />
              <Route path='/signup' element={<Signup />}  />
              <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
