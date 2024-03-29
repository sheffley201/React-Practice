import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//         font-weight: bold;
//         color: ${(props) => (props.invalid ? "red" : "black")};
//         display: block;
//         margin-bottom: 0.5rem;
//     }

//     & input {
//         display: block;
//         width: 100%;
//         border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//         background: ${(props) => (props.invalid ? "rgb(255, 205, 205)" : "transparent")};
//         font: inherit;
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//     }

//     & input:focus {
//         outline: none;
//         background: ${(props) => (props.invalid ? "rgb(255, 205, 205)" : "#fad0ec")};
//         border-color: ${(props) => (props.invalid ? "red" : "#8b005d")};
//     }
// `;

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        setIsValid(event.target.value.trim().length > 0);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue("");
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div
                className={`${styles["form-control"]} ${
                    !isValid ? styles.invalid : ""
                }`}
            >
                <label>Course Goal</label>
                <input
                    type="text"
                    value={enteredValue}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
