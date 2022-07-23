import { Fragment } from "react";

import mealsImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

import styles from "./Header.module.css";

const Header = props => {
	return (
		<Fragment>
			<header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
			<div className={styles['main-image']}>
                <img src={mealsImage} alt="a meal on a table" />
            </div>
		</Fragment>
	);
};

export default Header;
