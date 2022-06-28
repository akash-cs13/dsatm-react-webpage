import './styles.css';
import Homebtn from './Homebtn';
import Exitbtn from './Exitbtn';
import {  Link } from 'react-router-dom';

function Recipe() {
  return (
    <div><h1 className="mainpagehead ">Recipe...</h1>


        <div className="arv-card-container">


        <div className="arv-card">
        <div className="arv-card--img"></div>
        <div className="arv-card--text">
        <div className="arv-card--title">
        Apple Pie
        </div>
        <div className="arv-card--sub">
      <h4>Ingredients</h4>
      <li>2 thinly sliced and peeled apples<Link to="/prices/Apple">  Buy<i class="fa-solid fa-arrow-up-right-from-square"></i></Link></li>
      <li>Dough for double-crust pie</li>
      <li>1/3 cup sugar</li>
      <li>1/3 cup packed brown sugar</li>
      <li>1/4 cup all-purpose flour</li>
      <li>1 teaspoon ground cinnamon</li>
      <li>1/4 teaspoon ground ginger</li>
      <li>1/4 teaspoon ground nutmeg</li>
      <li>1 tablespoon lemon juice</li>
      <li>1 tablespoon butter</li>
      <li>1 large egg white</li>
      <li>Optional: Turbinado or coarse sugar, ground cinnamon, vanilla bean ice cream and caramel sauce</li>
      
      <h4>Recipe</h4>
      <li>Preheat oven to 375°. On a lightly floured surface, roll half of the dough to a 1/8-in.-thick circle; transfer to a 9-in. pie plate. In a small bowl, combine sugars, flour and spices. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat. Add filling; dot with butter.</li>
      <li>Roll remaining dough to a 1/8-in.-thick circle. Place over filling. Trim, seal and flute edge. Cut slits in top. Beat egg white until foamy; brush over crust. If desired, sprinkle with turbinado sugar and ground cinnamon. Cover edge loosely with foil.</li>
     <li>Bake 25 minutes. Remove foil; bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack. If desired, serve with ice cream and caramel sauce.</li>
      
    </div>
    
      
    
   
        </div>
        </div>
        </div>

        <Homebtn />
        <Exitbtn />
    </div>
  )
}

export default Recipe