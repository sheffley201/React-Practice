import styles from "./MealItem.module.css";

const MealItem = props => {
    return (
        <li className={styles.meal}>
            <h3>{props.meal.name}</h3>
            <p>{props.meal.description}</p>
            <p>${props.meal.price}</p>
        </li>
    )
}

export default MealItem;