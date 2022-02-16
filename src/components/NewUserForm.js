import React, { useState, Fragment } from "react";
import {
	Form,
	Button,
	Row,
	Col,
	InputGroup,
	FormControl,
} from "react-bootstrap";
import ErrorModal from "./ErrorModal";

function NewUserForm(props) {
	const [entereduserName, setentereduserName] = useState("");
	const [enteredage, setenteredage] = useState("");
	const [showError, setshowError] = useState(false);

	const usernameChangeHandler = (event) => {
		setentereduserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setenteredage(event.target.value);
	};

	const newUserFormSubmitHandler = (event) => {
		event.preventDefault();
		const submittedData = {
			username: entereduserName,
			Age: enteredage,
		};

		if (entereduserName.trim().length === 0 || enteredage.trim().length === 0) {
			setshowError(true);
			return;
		}

		if (+submittedData.Age < 1) {
			setshowError(true);
			return;
		}

		props.newSubmission(submittedData);

		setentereduserName("");
		setenteredage("");
	};

	const OnCloseHandlerFunction = (data) => {
		setshowError(false);
	};

	return (
		<React.Fragment>
			<Form onSubmit={newUserFormSubmitHandler}>
				<Row className="align-items-center m-4 justify-content-md-center">
					<Col sm="12" lg="3">
						<Form.Label htmlFor="username" visuallyHidden>
							Username
						</Form.Label>
						<InputGroup className="mb-2">
							<InputGroup.Text>@</InputGroup.Text>
							<FormControl
								id="username"
								placeholder="Username"
								type="text"
								onChange={usernameChangeHandler}
								value={entereduserName}
							/>
						</InputGroup>
					</Col>
					<Col sm="12" lg="2">
						<Form.Label htmlFor="age" visuallyHidden>
							Age (Years)
						</Form.Label>
						<Form.Control
							className="mb-2"
							id="age"
							placeholder="Age (Years)"
							name="age"
							type="number"
							min="1"
							max="105"
							onChange={ageChangeHandler}
							value={enteredage}
						/>
					</Col>

					<Col sm="12" lg="2">
						<Button type="submit" className="mb-2">
							Add User
						</Button>
					</Col>
				</Row>
			</Form>
			<ErrorModal
				errorState={showError}
				onCloseHandler={OnCloseHandlerFunction}
			/>
		</React.Fragment>
	);
}

export default NewUserForm;
