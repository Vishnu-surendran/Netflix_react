
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";
import {ActionMovies,originals} from './url'
import './App.css'
function App() {

  return (

    <div className="App">
<Navbar/>
<Banner/>
<RowPost url={originals} title='Netflix Originals'/>
<RowPost url={ActionMovies} title='Action' isSmall/>
    </div>
  );
}

export default App;
