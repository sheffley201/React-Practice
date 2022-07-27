import { useContext, useEffect, useState } from "react";

import CartContext from "../../context/cart-context";

import styles from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartContext = useContext(CartContext);

    const { cart } = cartContext;

    const numOfItems = cart.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (cart.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [cart]);
    
	return (
		<button onClick={props.onClick} className={btnClasses}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numOfItems}</span>
		</button>
	);
};

export default HeaderCartButton;
