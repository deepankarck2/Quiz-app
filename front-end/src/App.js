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
import Homepages from './components/Homepages';
import { SignalIcon } from '@heroicons/react/24/outline';
import CreateFlashCards from './components/CreateFlashCards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
              {/* <Route path='/login' element={<Login />}  /> */}
              <Route path='/' element = {<Home />} />
              <Route path='/take' element={<TakeQuiz />}  />
              <Route path='/login' element={<Login/>}  />
              <Route path='/register' element={<Register />}  />
              <Route path='/random' element={<Random />} />
              <Route path='/nav-bar' element={<Navbar />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Homepages' element={<Homepages />} />
              <Route path='/CreateFlashCards' element={<CreateFlashCards/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
