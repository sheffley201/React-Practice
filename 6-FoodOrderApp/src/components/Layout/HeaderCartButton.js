import { useContext } from "react";

import CartContext from "../../context/cart-context";

import styles from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = props => {
    const cartContext = useContext(CartContext);

    const numOfItems = cartContext.cart.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)
    
	return (
		<button onClick={props.onClick} className={styles.button}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numOfItems}</span>
		</button>
	);
};

export default HeaderCartButton;
