import './styles.css';
import Homebtn from './Homebtn';
import Exitbtn from './Exitbtn';
import {  Link } from 'react-router-dom';

function Settings() {
  return (
    <div><h1 className="mainpagehead pricehead">Settings</h1>

    <div className='about'>
      <p>Final year project - Smart Refrigerator</p>
      <p>By: 
        <ul>
          <li>A Gautham Reddy</li>
          <li>Akash CS</li>
          <li>Arvind M</li>
          <li>Bhagesh</li>
        </ul>
      </p>
      <p>Under the guidance of:</p>
      <p>Dr. Ravi Gatti</p>
    </div>



    <Homebtn />
    <Exitbtn />
</div>
  )
}

export default Settings