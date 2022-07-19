import styles from "./Card.module.css";

const Card = props => {
	const classes = styles.card + " " + props.className; // concatenate the classes from the styles module and the className prop

	return <div className={classes}>{props.children}</div>;
};

export default Card;
