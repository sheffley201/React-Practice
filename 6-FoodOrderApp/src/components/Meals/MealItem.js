import styles from "./MealItem.module.css";

const MealItem = props => {
	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.meal.name}</h3>
				<div className={styles.description}>{props.meal.description}</div>
				<div className={styles.price}>${props.meal.price}</div>
			</div>
		</li>
	);
};

export default MealItem;
