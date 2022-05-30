import './styles.css';
import {  Link, useParams } from 'react-router-dom';
import Blinkit from './Blinkitapi.json'
import Bigbasket from './Bigbasketapi.json'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import ProductCard from './ProductCard';
import Homebtn from './Homebtn';
import ImgLink from "./imglink.json";



function Prices() {
    let params = useParams();
    let items = Blinkit[params.grocery]
    let utems = Bigbasket[params.grocery]
    let imgl = ImgLink[params.grocery]

  console.log(typeof imgl)

  return (
    <div>
      <h1 className="mainpagehead pricehead">Results for {params.grocery}</h1>
    <Container >
          <h1 className="mainpagehead blinkithead">Blinkit results...</h1>
          <div className='scroll-content blinkit-scroll' >
            {items.map((product)=>(
                <ProductCard product={product} imagelink={imgl} />
            ))}
          </div>
          
    </Container>
    <Container>
    <h1 className="mainpagehead bigbaskethead">Bigbasket results...</h1>
    <div className="scroll-content bigbasket-scroll">
          {utems.map((product)=>(
                <ProductCard product={product}  imagelink={imgl}/>
            ))}
          </div>
    </Container>

    <Link to='/' className='mainpagebtn price-btn'><i className="fa-solid fa-house"></i></Link>

    </div>

  )
}

export default Prices