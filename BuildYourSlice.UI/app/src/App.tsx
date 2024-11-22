import { useState } from 'react'
import doughImage from './assets/dough.png'
import sauceImage from './assets/sauce.png'
import cheeseImage from './assets/cheese.png'
import pepperoniImage from './assets/pepperoni.png'
import './App.css'
import AddIngredientButton from './components/AddIngredientButton/addIngredientButton'

export interface Ingredient {
  id: number;
  src: string;
  name: string;
}

function App() {

  const availableIngredients : Array<Ingredient> = [
    {id: 1, name: "Sauce", src: sauceImage},
    {id: 2, name: "Cheese", src: cheeseImage},
    {id: 3, name: "Pepperoni", src: pepperoniImage},
  ];

  const [selectedIngredients, setIngredients] = useState<Ingredient[]>([]);

  const addIngredient = (src: string, name: string) => {
    setIngredients((prev) => [
      ...prev,
      { id: prev.length, src, name },
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

      <div className="pizza">
        <ul className="ingredients">
          <li>
            <img className="dough" src={doughImage} />
          </li>
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient.id} className="ingredient">
              <img src={ingredient.src} alt={ingredient.name} />
            </li>
          ))}
        </ul>
      </div>

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
