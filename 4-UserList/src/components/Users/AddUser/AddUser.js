import { useState } from "react";

import styles from "./AddUser.module.css";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const AddUser = props => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	const nameChangeHandler = e => {
		// when the name input is changed
		setName(e.target.value);
	};

	const ageChangeHandler = e => {
		// when the age input is changed
		setAge(e.target.value);
	};

	const addUserHandler = e => {
		// when the add user button is clicked
		e.preventDefault();

		if (name.trim() && +age > 0 && +age < 1000) {
			// make sure both fields are filled
			props.onSubmit({
				id: Math.random()
					.toString(36)
					.replace(/[^a-z]+/g, ""), //create a unique id with letters
				name: name,
				age: parseInt(age), // parseInt() is used to convert string to integer
			});

			setName("");
			setAge("");
		} else {
			// show alert if one or both of the fields are empty or out of range
			if (!name.trim() && !+age) {
				// if both fields are empty
				props.onIncomplete("Please fill out all fields");
			} else if (!name.trim()) {
				// if name field is empty
				props.onIncomplete("Please fill out the name field");
			} else if (!+age) {
				// if age field is empty
				props.onIncomplete("Please fill out the age field");
			} else if (+age < 0) {
				// if age is too low
				props.onIncomplete("Age cannot be negative");
			} else if (+age > 999) {
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
					<input
						type="text"
						name="username"
						value={name}
						onChange={nameChangeHandler}
					/>
				</div>
				<div className={styles["form-group"]}>
					<label htmlFor="age">Age (Years)</label>
					<input
						type="number"
						name="age"
						value={age}
						onChange={ageChangeHandler}
					/>
				</div>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
