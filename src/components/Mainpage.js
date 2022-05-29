import './styles.css';
import {  Link } from 'react-router-dom';

function Mainpage() {
    const closeTab = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
      };


  return (
    <div className="mainpage">
    <h1 className="mainpagehead">Smart Refrigerator.</h1>
    <div className="mainpagebtns">
      <Link className="mainpagebtn mpsearch" to='/search'><i className="fa-solid fa-magnifying-glass"></i>  Search</Link>
      <Link className="mainpagebtn mpsettings" to='/settings'><i className="fa-solid fa-gear"></i>  Settings</Link>
      <Link className="mainpagebtn mprecipe" to='/recipe'><i className="fa-solid fa-clipboard-list"></i>  Recipe</Link>
      <button className="mainpagebtn mpquit" onclick="{closeTab}"><i className="fa-solid fa-power-off"></i>  Quit</button>
    </div>
  </div>

  )
}

export default Mainpage