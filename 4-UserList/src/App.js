import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";
import ErrorModal from "./components/Error/ErrorModal/ErrorModal";

function App() {
	const [users, setUsers] = useState([]); // users is an array of objects
	const [showModal, setShowModal] = useState(false); // showModal is a boolean
	const [errorMessage, setErrorMessage] = useState(""); // errorMessage is a string

	const addUserHandler = user => {
		// when a user is added
		setUsers(prevUsers => {
			return [user, ...prevUsers]; // add the user to the beginning of the array
		});
	};

	const deleteUserHandler = userId => {
		// when a user is deleted
		setUsers(prevUsers => {
			return prevUsers.filter(user => user.id !== userId); // filter out the user with the id that is passed in
		});
	};

	const openModalHandler = message => {
		// when one or more fields are empty
		setErrorMessage(message);
		setShowModal(true);
	};

	const closeModalHandler = () => {
		// when the modal is closed
		setShowModal(false);
	};

	return (
		<Fragment>
			<AddUser
				onSubmit={addUserHandler}
				onIncomplete={openModalHandler}
			/>
			<UserList users={users} onDelete={deleteUserHandler} />
			{showModal && (
				<ErrorModal onClear={closeModalHandler}>
					<p style={{ color: "white", fontSize: "20px" }}>
						{errorMessage}
					</p>
				</ErrorModal>
			)}
		</Fragment>
	);
}

export default App;
