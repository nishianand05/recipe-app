import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
	
	static defaultProp = {
		onClose(){},
		onSave(){}
	}
	
	constructor(props){
		super(props);
		
		// Initialize recipe obj with empty values
		this.state = {
			title: '',
			instructions: '',
			ingredients: [''],
			img: ''
		};
		
		// this refers to RecipeInput
		this.handleChange = this.handleChange.bind(this);
		this.handleNewIngredient = this.handleNewIngredient.bind(this);		
		this.handleChangeIng = this.handleChangeIng.bind(this);		
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e){
		// Set state of particular name 	
		this.setState({[e.target.name]: e.target.value});
	}

	handleNewIngredient(e){
		
		// Get ingredients from state
		const {ingredients} = this.state;
		
		// Add empty string to ingredients array
		this.setState({ingredients: [...ingredients, '']})
	}

	handleChangeIng(e){
		
		//Get ingredient number
		const index = Number(e.target.name.split('-')[1]);
		
		const ingredients = this.state.ingredients.map((ing, i) => (
			// find index and set particular value to ing
			i === index ? e.target.value: ing 
		));
		
		// set new ingredients
		this.setState({ingredients});
	}

	handleSubmit(e){
		e.preventDefault();
		
		//call onSave method with deconstructed state obj as parameter
		this.props.onSave({...this.state});
		
		// set state as obj with empty values
		this.setState({
			title: '',
			instructions: '',
			ingredients: [''],
			img: ''
		});
	}

	render() {
		
		const {title, instructions, img, ingredients} = this.state;
		const {onClose} = this.props;
		
		// Ingredient inputs
		let inputs = ingredients.map((ing, i) => (
			<div className="recipe-form-line" key={`ingredient-${i}`}>
				<label>{i+1}.
					<input
						type = "text"
						name = {`ingredient-${i}`}
						value = {ing}
						size = {45}
						autoComplete = "off"
						placeholder = "Ingredient"
						onChange = {this.handleChangeIng} 
					/>
				</label>
			</div>
		));
		
		return (
			<div className="recipe-form-container">
				<form className="recipe-form" onSubmit={this.handleSubmit}>
					
					{/*Cross button*/}
					<button
						type="button"
						className="close-button"
						onClick={onClose}
					>X</button>
					
					{/* Title input */}
					
					<div className="recipe-form-line">
						<label htmlFor="recipe-title-input">Title</label>
						<input
							id='recipe-title-input'
							key='title'
							name='title'
							type='text'
							value={title}
							size={42}
							autoComplete="off"
							onChange={this.handleChange}
						/>
					</div>
					
					{/* Instructions inputs */}
					
					<label
						htmlFor='recipe-instructions-input'
						style={{marginTop: '5px'}}>
						Instructions
					</label>
					<textarea
						key='instructions'
						id='recipe-instructions-input'
						type='Instructions'
						name='instructions'
						rows='8'
						cols='50'
						autoComplete='off'
						value={instructions}
						onChange={this.handleChange}/>
					
					{/* Ingredients input*/}
					
					{inputs}
					<button
						type='button'
						onClick={this.handleNewIngredient}
						className='buttons'>+</button>
					
					{/* Image input */}
					
					<div className='recipe-form-line'>
						<label htmlFor='recipe-img-input'>Image Url</label>
						<input
							id="recipe-img-input"
							type='text'
							placeholder=''
							name='img'
							value={img}
							size={36}
							autoComplete='off'
							onChange={this.handleChange} />
					</div>
					
					{/* Save button */}
					
					<button
						type='submit'
						className='buttons'
						style={{alignSelf: 'flex-end', marginRight: 0}}>Save</button>
					
				</form>
			</div>
		);
		
	}
}

export default RecipeInput;