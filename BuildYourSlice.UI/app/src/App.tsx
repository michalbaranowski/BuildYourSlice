import { useState } from 'react'
import sauceImage from './assets/sauce.png'
import cheeseImage from './assets/cheese.png'
import pepperoniImage from './assets/pepperoni.png'
import './App.css'
import AddIngredientButton from './components/AddIngredientButton/AddIngredientButton'
import PizzaComponent from './components/PizzaComponent/PizzaComponent'

export interface Ingredient {
  id: number;
  src: string;
  name: string;
  price: number;
}

function App() {

  const basePrice : number = 15;

  const availableIngredients : Array<Ingredient> = [
    {id: 1, name: "Sauce", src: sauceImage, price: 0.5},
    {id: 2, name: "Cheese", src: cheeseImage, price: 2},
    {id: 3, name: "Pepperoni", src: pepperoniImage, price: 3},
  ];

  const [selectedIngredients, setIngredients] = useState<Ingredient[]>([]);

  const addIngredient = (ingredient: Ingredient) => {
    setIngredients((prev) => [
      ...prev,
      ingredient,
    ]);
  };

  const removeIngredient = (name: string) => {
    setIngredients((prev) => {
      return prev.filter(x => x.name !== name);
    });
  };

  return (
    <>
      <h1>Create your pizza</h1>
      { selectedIngredients.length > 0 ?
        (<p>Your pizza will cost: {(basePrice + selectedIngredients.reduce((sum, value) => sum + value.price, 0)).toFixed(2)} PLN</p>) :
        (<p>Select ingredients to calculate price...</p>)
      }
      <PizzaComponent selectedIngredients={selectedIngredients} />

      <div className="controls">
        {
          availableIngredients.map((ingredient) => (
            <AddIngredientButton
              key={ingredient.id}
              ingredient={ingredient}
              selectedIngredients={selectedIngredients}
              onAddIngredient={addIngredient}
              onRemoveIngredient={removeIngredient} />
          ))
        }
      </div>
    </>
  )
}

export default App
