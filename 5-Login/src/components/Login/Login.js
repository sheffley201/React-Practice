import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.value, isValid: action.value.includes("@") };
	} else if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.includes("@") };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.value, isValid: action.value.trim().length > 6 };
	} else if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: "", isValid: false };
};

const Login = props => {
	const [formIsValid, setFormIsValid] = useState(false);
	const context = useContext(AuthContext);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log("validating form");
			setFormIsValid(emailState.isValid && passwordState.isValid);
		}, 500);
		return () => {
			console.log("clearing timeout");
			clearTimeout(identifier);
		};
	}, [emailState.isValid, passwordState.isValid]);

	const emailChangeHandler = event => {
		dispatchEmail({ type: "USER_INPUT", value: event.target.value });
	};

	const passwordChangeHandler = event => {
		dispatchPassword({ type: "USER_INPUT", value: event.target.value });
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
	};

	const submitHandler = event => {
		event.preventDefault();
		context.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ""
					}`}
                    type="email"
					id="email"
					label="E-Mail"
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ""
					}`}
                    type="password"
					id="password"
					label="Password"
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
