import Nav from '../components/Nav'
import {Link} from 'react-router-dom'

function Home(){

    return(
        <div>
          <Nav />  
            <h1>This is home page</h1>
            <Link to="/take">Go to take Quiz</Link>
            <br />
            <Link to="/random">Go to Random</Link>
        </div>
    )
}

export default Home;