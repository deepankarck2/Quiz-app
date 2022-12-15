import {Link} from 'react-router-dom'
import Homepages from '../components/Homepages';
import Navbar from '../components/Navbar';

function Home(){
    return(
        <div>
          <Navbar />  
            <Homepages/>
        </div>
    )
}

export default Home;