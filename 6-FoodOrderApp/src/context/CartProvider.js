import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
	cart: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const updatedTotalAmount =
			state.totalAmount + action.payload.price * action.payload.amount;

		const existingCartItemIndex = state.cart.findIndex(
			item => item.id === action.payload.id
		);

		const existingCartItem = state.cart[existingCartItemIndex];

		let updatedCart;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.payload.amount,
			};

			updatedCart = [...state.cart];
			updatedCart[existingCartItemIndex] = updatedItem;
		} else {
			updatedCart = state.cart.concat(action.payload);
		}

		return {
			cart: updatedCart,
			totalAmount: updatedTotalAmount,
		};
	} else if (action.type === "REMOVE_ITEM") {
		const existingCartItemIndex = state.cart.findIndex(
			item => item.id === action.payload
		);

		const existingItem = state.cart[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingItem.price;

		let updatedCart;
		if (existingItem.amount === 1) {
			updatedCart = state.cart.filter(item => {
				return item.id !== action.payload;
			});
		} else {
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount - 1,
			};
			updatedCart = [...state.cart];
			updatedCart[existingCartItemIndex] = updatedItem;
		}

		return {
			cart: updatedCart,
			totalAmount: updatedTotalAmount,
		};
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
