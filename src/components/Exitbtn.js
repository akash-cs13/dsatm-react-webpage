import './styles.css';



function Exitbtn() {

  const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  return (
    <button id="btn" className="mainpagebtn exitbtn" onclick="{closeTab}"><i className="fa-solid fa-power-off"></i></button>
  )
}

export default Exitbtn