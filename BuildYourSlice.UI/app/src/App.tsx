import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import PizzaComponent from './components/PizzaComponent/PizzaComponent'
import AddIngredientButton from './components/AddIngredientButton/AddIngredientButton'

import { ApiService } from './data/services/ApiService'


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
    ApiService.GetProducts().then(response => {
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
      <Header basePrice={basePrice} selectedIngredients={selectedIngredients}/>
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
