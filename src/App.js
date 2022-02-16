import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import NewUserForm from "./components/NewUserForm";
import { Container } from "react-bootstrap";
import Footerblock from "./components/FooterBlock";

const FillerData = [
	{ username: "john_doe", Age: "19" },
	{ username: "Jane_doe", Age: "21" },
	{ username: "davie_jones", Age: "25" },
	{ username: "sarah_james", Age: "32" },
	{ username: "vivian_richards", Age: "19" },
];

function App() {
	const [UserData, setUserData] = useState(FillerData);

	const formDataHandler = (data) => {
		setUserData((prevData) => {
			return [data, ...prevData];
		});
	};

	return (
		<Container>
			<NewUserForm newSubmission={formDataHandler} />
			<UserList data={UserData} />
			<Footerblock/>
		</Container>
	);
}

export default App;
