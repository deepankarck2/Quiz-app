import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar';

function Home(){

    return(
        <div>
          <Navbar />  
            <h1>This is home page</h1>
            <Link to="/take">Go to take Quiz</Link>
            <br />
            <Link to="/random">Go to Random</Link>
        </div>
    )
}

export default Home;