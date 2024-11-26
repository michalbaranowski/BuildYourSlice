import { Ingredient } from "../../App";

interface PizzaComponentProps {
    selectedIngredients: Array<Ingredient>;
    doughSrc: string;
  }

export default function AddIngredientButton(props: PizzaComponentProps) {
    return <>
            <div className="pizza">
                <ul className="ingredients">
                <li>
                    {
                    props.doughSrc
                        ? (<img className="dough" src={props.doughSrc} />)
                        : <></>
                    }
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