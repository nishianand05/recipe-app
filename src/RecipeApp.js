import React, {Component} from 'react';
import './RecipeApp.css';
import Navbar from "./Navbar";
// import Recipe from './Recipe';
import RecipeList from "./RecipeList";
import RecipeInput from "./RecipeInput";


class RecipeApp extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			recipes: [
				{
					id: 0,
					title: "Spaghetti",
					img: "spaghetti.jpg",
					ingredients: ["1 lb. spaghetti noodles",
								  "1 lb. Italian tomato sauce",
								  "8 ounces tomato paste",
								  "2 tablespoons minced onion",
								  "2 tablespoons minced garlic",
								  "2 tablespoons oil",
								  "1 lb. ground pork",
								  "½ cup minced carrots and red peppers",
								  "2 cups diced or thinly sliced hot dogs",
								  "1 cup water",
								  "1 tablespoon salt",
								  "1 teaspoon seasoning mix",
								  "7 ounces evaporated milk",
								  "grated cheese for topping"],
					instructions: "Cook the noodles according to package directions. Set aside. Place the garlic, onion, and oil in a large saucepan or skillet. Saute for 3-4 minutes or until soft and fragrant. Add the ground pork and brown the meat until it’s completely cooked. Add the minced vegetables and hot dog pieces and stir to combine. Add the water and allow the mixture to simmer for 10-15 minutes. Add the tomato sauce and tomato paste to the meat and continue to simmer the mixture for another 10-15 minutes. Add the evaporated milk and salt and stir until incorporated. Combine the noodles and the sauce in a large pot or mixing bowl. Top with grated cheese. At Cherne they grate a processed cheese similar to Velveeta and let it melt into the top layer of the spaghetti."
				}, 
				{
					id: 1,
					title: 'Chocolate Milkshake',
					img: "chocoMilkshake.jpg",
					ingredients: [
						"2 cups vanilla ice cream",
						"1/2 cup whole milk, cold",
						"1/4 cup chocolate syrup",
						"1/4 cup chocolate chips, optional",
						"Whipped cream, garnish",
						"Shaved chocolate, garnish"
					],
					instructions: "Place the ice cream, milk, and chocolate syrup into the blender. If using chocolate chips, add those as well. Be mindful that the harder the ice cream is, the better, as the blending process can liquefy the ice cream too much and make the milkshake too thin. Blend the ingredients until completely smooth. Pour into your glasses immediately, top with whipped cream, and decorate with shaved chocolate. Enjoy!"
				},
				{
					id: 2,
					title: "Chocolate Mousse",
					img: "chocoMousse.jpg",
					ingredients: [
						"Heavy cream",
						"Egg yolks",
						"Granulated sugar",
						"Vanilla extract",
						"Bittersweet chocolate",
						"Sea salt (optional)"
					],
					instructions: "Whip egg yolks and sugar: In medium mixing bowl using an electric hand mixer whip together egg yolks and granulated sugar on high speed until pale and fluffy, about 2 minutes. Heat 3/4 cup cream: Warm 3/4 cup of the heavy cream in a 2-quart saucepan on the stovetop over low heat until hot. Temper eggs with cream mixture: While whisking egg mixture slowly pour in warm cream mixture to temper egg yolks. Then pour combined egg yolk and cream mixture back into saucepan. Cook mixture to 160 degrees: Cook over low heat, whisking constantly, until mixture thickens just slightly and reaches 160 degrees on an instant read thermometer. If you notice any clumps strain through a sieve and return to saucepan. 5. Melt in chocolate: Off heat add in chocolate, stir until melted. Let cool to room temp: Pour mixture into a clean medium bowl, cover and chill, stirring about every 10 – 15 minutes until it reaches 70 degrees (or no longer warm), about 30 – 40 minutes total. Whip remaining cream, fold into chocolate mixture: Whip remaining heavy cream until very stiff peaks form. Fold whipped cream into chocolate mixture until combined. Divide mixture among dessert cups, chill: Pipe or spoon into dessert cups. Chill 2 hours. Top with sweetened whipped cream if desired and garnish with shaved or grated chocolate."
				},
				{
					id: 3, 
					title: 'French Fries',
					img: "frenchFries.jpg",
					ingredients: [
						"2 1/2 pounds russet potatoes",
						"Vegetable or peanut oil, for frying",
						"Sea salt, for sprinkling",
						"Ketchup and mayonnaise, mixed, for serving"
					],
					instructions: "Peel and rinse the potatoes. Cut each potato lengthwise into 4 or 5 pieces, then cut each piece into sticks. The thinner these are, the crispier they will be. Place the fries in a large bowl. Cover with cold water, then allow them to soak 2 or 3 hours (or you can stick them in the fridge and let them soak overnight). When you're ready to make the fries, drain the water and lay the potatoes on 2 baking sheets lined with paper towels. Blot with paper towels to dry. Heat a few inches of vegetable oil to 300 degrees F in a heavy pot. In 3 or 4 batches, fry the potatoes about 4 to 5 minutes per batch, or until soft. They should not be brown at all at this point-you just want to start the cooking process. Remove each batch and drain them on new, dry paper towels. Once all the potatoes have been fried at 300 degrees F, turn up the heat until the oil temperature reaches 400 degrees F. When the oil is hot, start frying the potatoes in batches again, cooking until golden and crisp. Remove from the oil and drain on fresh paper towels. Sprinkle the fries with sea salt and dive in with the ketchup-mayo mixture. "
				}
			],
			nextRecipeId: 4,
			showForm: false
		}
		
		// this refers to RecipeApp
		
		this.handleSave = this.handleSave.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}
	
	handleSave(recipe){
		this.setState((prevState, props)=>{
			
			// Deconstructing new recipe obj and adding id 		
			const newRecipe = {...recipe, id: this.state.nextRecipeId};

			return {
				// Inc nextRecipeId. Add new recipe to recipes array. Set showForm to false.
				nextRecipeId: prevState.nextRecipeId + 1,
				recipes: [...this.state.recipes, newRecipe],
				showForm: false
			}
		});
	}
	
	onDelete(id){
		// Get recipes which do not match id and setState
		const recipes = this.state.recipes.filter(r => r.id !== id);
		this.setState({recipes});
	}
	
	render(){
		
		const {showForm} = this.state;
		
		// Send onNewRecipe as prop - Sets showForm to true
		// If showForm is true - 
		// render RecipeInput with onClose (Sets showForm to false) and onSave (Calls handleSave function) props.
		// Render RecipeList with recipes and onDelete as props

		return (
			<div className="RecipeApp">
				
				<Navbar onNewRecipe={()=> this.setState({showForm: true})}/>
				
				{ showForm ? <RecipeInput 
								 onClose={() => this.setState({showForm: false})} 
								 onSave={this.handleSave} /> : null }
				
				<RecipeList recipes={this.state.recipes} onDelete={this.onDelete}/>
			</div>
		  );
	}
}

export default RecipeApp;
