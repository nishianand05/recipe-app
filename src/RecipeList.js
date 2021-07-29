import React, {Component} from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
		onDelete: PropTypes.func.isRequired
	}

	render(){
		const {onDelete} = this.props;
		
		// Recipes with key, rest of the details and onDelete function as props
		const recipes = this.props.recipes.map((r, index) => (
			<Recipe key={r.id} {...r} onDelete={onDelete}/>
		));
		
		return (
			<div className="recipe-list">
				{recipes}
			</div>
		);
	}
}

export default RecipeList;