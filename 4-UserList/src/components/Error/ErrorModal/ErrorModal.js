import { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const Backdrop = props => {
	return <div className={styles.backdrop} onClick={props.onClear} />;
};

const ModalOverlay = props => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>Something went wrong</h2>
			</header>
			<section className={styles.content}>
				<p>{props.children}</p>
			</section>
			<footer className={styles.actions}>
				<Button onClick={props.onClear}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = props => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClear={props.onClear} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay onClear={props.onClear}>
					{props.children}
				</ModalOverlay>,
				document.getElementById("modal-root")
			)}
		</Fragment>
	);
};

export default ErrorModal;
