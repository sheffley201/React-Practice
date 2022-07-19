import styles from "./UserList.module.css";

import Card from "../../UI/Card/Card";
import User from "../User/User";

const UserList = props => {
	let listContent = (
		<p style={{ color: "white", textAlign: "center" }}>No users to show</p>
	); // default value

	if (props.users.length > 0) {
		// if there are users in the list
		listContent = (
			<ul className={styles.userList}>
				{props.users.map(user => (
					<User key={user.id} user={user} onDelete={props.onDelete} />
				))}
			</ul>
		);
	}

	return <Card>{listContent}</Card>;
};

export default UserList;
