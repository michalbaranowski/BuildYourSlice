import { useEffect, useRef, useState } from 'react'
import './App.css'
import AddIngredientButton from './components/AddIngredientButton/AddIngredientButton'
import PizzaComponent from './components/PizzaComponent/PizzaComponent'
import axios from 'axios'
import { Product } from './data/models/Products'

export interface Ingredient {
  id: number;
  src: string;
  name: string;
  price: number;
}

function App() {

  const [basePrice, setBasePrice] = useState<number>(0);
  const [doughSrc, setDoughSrc] = useState<string>("");

  const [availableIngredients, setAvailableIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    axios.get<Product[]>('https://localhost:7078/api/Products').then(response => {

      const baseProduct = response.data.filter(x => x.isBaseProduct === true)[0];
      setBasePrice(baseProduct.price);
      setDoughSrc(`data:image/png;base64,${baseProduct.image}`);

      const ingredients = response.data.filter(x => x.isBaseProduct === false)
      .map(x => ({
        id: x.id,
        name: x.name,
        src: `data:image/png;base64,${x.image}`,
        price: x.price,
      } as Ingredient));

      setAvailableIngredients(ingredients);
    });
  }, []);

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
      <PizzaComponent selectedIngredients={selectedIngredients} doughSrc={doughSrc} />

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
