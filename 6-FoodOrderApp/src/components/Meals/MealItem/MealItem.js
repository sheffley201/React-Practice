import { useContext } from "react";

import styles from "./MealItem.module.css";
import CartContext from "../../../context/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = props => {
	const price = `$${props.price.toFixed(2)}`;

	const cartContext = useContext(CartContext);

	const addToCartHandler = amount => {
		cartContext.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			amount: amount,
		});
	};

	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
