import './styles.css';
import Homebtn from './Homebtn';
import Exitbtn from './Exitbtn';
import {  Link } from 'react-router-dom';

function Recipe() {
  return (
    <div><h1 className="mainpagehead ">Recipe...</h1>

        <h1 className="mainpagehead pricehead">Apple pie Recipie</h1>
        <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/apple-pie-recipe18.jpg" alt=""  className='recipe-img'/>
        <div className='ingredients-list'>
        <ul>
          <li>2 apples <Link to="/prices/Apple">  Buy<i class="fa-solid fa-arrow-up-right-from-square"></i></Link> </li>
          <li>1 cup whole wheat flour </li>
          <li>¼ cup olive oil</li>
          <li>⅓ cup water</li>
          <li>½ teaspoon salt</li>
          <li>¼ teaspoon ground cinnamon</li>
          <li>2 tablespoons whole wheat flour</li>
          <li>1 to 2 pinches raw sugar</li>
        </ul>
        </div>

        <div className="instructions">
        <h1 className="mainpagehead pricehead">Instructions</h1>
        <p className="ingredients-list insts">Mix all the dry ingredients together - whole wheat flour, all purpose flour and salt.Add the olive oil and with your finger tips combine the oil in the flour evenly to get a breadcrumb consistency. This step should be done properly and this results in giving a flaky texture to the crust. The whole mixture should look like breadcrumbs.Add water in parts binding the whole mixture together. Don't knead. Gather everything and form a dough.
        Add water in parts binding the whole mixture together. Don't knead. Gather everything and form a dough.Mix the ground cinnamon, ground nutmeg, demerara sugar and whole wheat flour into the apples.Preheat your oven at 180 degrees celsius (356 degrees Fahrenheit) for 15 minutes.Grease your pie pan with olive oil.
        Divide the dough into two or four equal parts depending on the size of your pie pans.Take one portion of the dough on a dusted work surface. Use a rolling pin to roll the dough out into an even layer that is about ¼ inch thick.Place one of the rolled pie crust gently on the greased pan and press it towards the bottom and the sides.Arrange the apple filling evenly on the bottom pie crust.Top the apple slices with a few drops of olive oil or dots of vegan butter.
        Bake in a preheated oven at 180 degrees Celsius (356 degrees Fahrenheit) for 50 to 60 minutes or until the crust has become golden and crisp.Serve the apple pie warm or when at room temperature.
        </p>
        </div>

        <Homebtn />
        <Exitbtn />
    </div>
  )
}

export default Recipe