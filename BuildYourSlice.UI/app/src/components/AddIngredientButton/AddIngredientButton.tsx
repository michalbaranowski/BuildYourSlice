import { Ingredient } from "../../App";

interface IngredientControlsProps {
    selectedIngredients: Array<Ingredient>;
    onAddIngredient: (ingredient: Ingredient) => void;
    onRemoveIngredient: (name: string) => void;

    ingredient: Ingredient;
  }

export default function AddIngredientButton(props: IngredientControlsProps) {

    const isIngredientAdded = () => props.selectedIngredients.some((ingredient) => ingredient.name === props.ingredient.name);

    return <>
           {
                isIngredientAdded() === false ?
                (
                    <button onClick={() => props.onAddIngredient(props.ingredient)}>
                        Add {props.ingredient.name}
                    </button>
                ) :
                (
                    <button onClick={() => props.onRemoveIngredient(props.ingredient.name)}>
                        Remove {props.ingredient.name}
                    </button>
                )
            } 
          </>
}