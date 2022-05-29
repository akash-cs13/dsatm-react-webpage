
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
      },
      media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
      },
    }));

function ProductCard({ product}) {

    const classes = useStyles();


  return (
    <div className='product-card'>
        <Card>
        <CardMedia
          component="img"
          alt={product.item}
          className={classes.media}
          height="140"
          image= "https://cdn.grofers.com/app/images/products/sliding_image/311059a.jpg?ts=1605686561"
        />
        <CardContent>
          <Typography  >   {/* gutterBottom variant="h5" component="h2" >  */}
            <h2 className='item-title'>{product.item}</h2>
          </Typography>
          <Typography  >
            <p className='item-price'>{'Rs.'+ product.price}</p>
            <p className='item-desc'>{product.packet_description}</p>
          </Typography>
        </CardContent>
        <CardActions>
        <a href={product.url} target="_blank" className='link-to-url'>Link  <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </CardActions>
        </Card>
    </div>
  )
}

export default ProductCard