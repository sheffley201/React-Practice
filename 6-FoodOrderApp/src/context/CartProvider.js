import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
	cart: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const updatedCart = state.cart.concat(action.payload);
		const updatedTotalAmount =
			state.totalAmount + action.payload.price * action.payload.amount;
		return {
			cart: updatedCart,
			totalAmount: updatedTotalAmount,
		};
	} else if (action.type === "REMOVE_ITEM") {
	}
	return defaultCartState;
};

const CartProvider = props => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemHandler = item => {
		dispatchCartAction({
			type: "ADD_ITEM",
			payload: item,
		});
	};

	const removeItemHandler = id => {
		dispatchCartAction({
			type: "REMOVE_ITEM",
			payload: id,
		});
	};

	const cartContext = {
		cart: cartState.cart,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
