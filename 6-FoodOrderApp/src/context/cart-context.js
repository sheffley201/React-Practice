import React from "react";

const CartContext = React.createContext({
	cart: [],
	totalAmount: 0,
	addItem: item => {},
	removeItem: id => {},
});

export default CartContext;
