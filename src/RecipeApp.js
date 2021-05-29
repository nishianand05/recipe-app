import './RecipeApp.css';
import Navbar from "./Navbar";
// import Recipe from './Recipe';
import RecipeList from "./RecipeList";

function RecipeApp() {
  return (
    <div className="RecipeApp">
		  <Navbar/>
		  <RecipeList/>
    </div>
  );
}

export default RecipeApp;
