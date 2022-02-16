import React from "react";
import { Modal, Button } from "react-bootstrap";

const ErrorModal = (props) => {
	const handleClose = () => {
		props.onCloseHandler(false);
	};

	return (
		<Modal show={props.errorState} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Invalid Input!</Modal.Title>
			</Modal.Header>
			<Modal.Body>Sorry! Your input in the form is invalid.</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ErrorModal;
