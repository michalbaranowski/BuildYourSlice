import doughImage from '../../assets/dough.png';
import { Ingredient } from "../../App";

interface PizzaComponentProps {
    selectedIngredients: Array<Ingredient>;
  }

export default function AddIngredientButton(props: PizzaComponentProps) {
    return <>
            <div className="pizza">
                <ul className="ingredients">
                <li>
                    <img className="dough" src={doughImage} />
                </li>
                {props.selectedIngredients.map((ingredient) => (
                    <li key={ingredient.id} className="ingredient">
                    <img src={ingredient.src} alt={ingredient.name} />
                    </li>
                ))}
                </ul>
            </div>
        </>
}