import { Ingredient } from "../../App"

export interface HeaderProps {
    basePrice: number;
    selectedIngredients: Array<Ingredient>;
}

export default function Header(props: HeaderProps) {
    return <>
        <h1>Create your pizza</h1>
      { props.selectedIngredients.length > 0 ?
        (<p>Your pizza will cost: {(props.basePrice + props.selectedIngredients.reduce((sum, value) => sum + value.price, 0)).toFixed(2)} PLN</p>) :
        (<p>Select ingredients to calculate price...</p>)
      }
    </>
}