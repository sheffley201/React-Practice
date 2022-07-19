import styles from "./User.module.css";

import Button from "../../UI/Button/Button";

const User = props => {
	const deleteHandler = () => {
		// when the delete button is clicked
		props.onDelete(props.user.id);
	};

    const year = props.user.age === 1 ? "year" : "years";

	return (
		<li className={styles.user}>
			<div>
				<span>{props.user.name}</span>
				<span> ({props.user.age} {year} old)</span>
			</div>
			<Button onClick={deleteHandler}>
				<span style={{ fontWeight: "bold", fontSize: "24px" }}>X</span>
			</Button>
		</li>
	);
};

export default User;
