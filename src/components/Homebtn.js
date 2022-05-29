import './styles.css';
import {  Link } from 'react-router-dom';

function Homebtn() {
  return (
    <Link to='/' className='mainpagebtn homebtn'><i className="fa-solid fa-house"></i></Link>
  )
}

export default Homebtn