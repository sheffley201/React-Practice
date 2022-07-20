import { useRef } from "react";

import styles from "./AddUser.module.css";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const AddUser = props => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const addUserHandler = e => {
		// when the add user button is clicked
		e.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		if (enteredName.trim() && +enteredAge > 0 && +enteredAge < 1000) {
			// make sure both fields are filled
			props.onSubmit({
				id: Math.random()
					.toString(36)
					.replace(/[^a-z]+/g, ""), //create a unique id with letters
				name: enteredName,
				age: parseInt(enteredAge), // parseInt() is used to convert string to integer
			});
			// clear the input fields
			nameInputRef.current.value = "";
			ageInputRef.current.value = "";
		} else {
			// show alert if one or both of the fields are empty or out of range
			if (!enteredName.trim() && !+enteredAge) {
				// if both fields are empty
				props.onIncomplete("Please fill out all fields");
			} else if (!enteredName.trim()) {
				// if name field is empty
				props.onIncomplete("Please fill out the name field");
			} else if (!+enteredAge) {
				// if age field is empty
				props.onIncomplete("Please fill out the age field");
			} else if (+enteredAge < 0) {
				// if age is too low
				props.onIncomplete("Age cannot be negative");
			} else if (+enteredAge > 999) {
				// if age is too high
				props.onIncomplete("Age cannot be greater than 999");
			}
		}
	};

	return (
		<Card>
			<form onSubmit={addUserHandler}>
				<div className={styles["form-group"]}>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" ref={nameInputRef} />
				</div>
				<div className={styles["form-group"]}>
					<label htmlFor="age">Age (Years)</label>
					<input type="number" name="age" ref={ageInputRef} />
				</div>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
