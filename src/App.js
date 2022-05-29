import './App.css';
import Search from './components/Search';
import Mainpage from './components/Mainpage';
import Settings from './components/Settings';
import Recipe from './components/Recipe';
import Prices from './components/Prices';
import { Routes, Route, useParams } from 'react-router-dom'



function App() {
  
  var { grocery } = useParams;

  return (
    <div className="App">
      <Routes>
        
        <Route exact path='/' element={<Mainpage/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='recipe' element={<Recipe/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='prices/:grocery' element={<Prices />}/>
        
      </Routes>
    </div>

  );
}

export default App;


// use props to send info form page to page
//context api to store json data
