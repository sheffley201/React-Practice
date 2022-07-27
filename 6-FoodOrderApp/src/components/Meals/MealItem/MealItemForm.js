import { useRef, useState } from "react";

import styles from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = props => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = e => {
		e.preventDefault();

		const amount = amountInputRef.current.value;
        const amountNum = +amount;
		if (amount.trim().length === 0 || amount <= 0 || amount > 5) {
			setAmountIsValid(false);
			return;
		}

        setAmountIsValid(true);
        props.onAddToCart(amountNum);
	};

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount_" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p>Amount must be between 1 and 5</p>}
		</form>
	);
};

export default MealItemForm;
