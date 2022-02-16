import React from "react";
import { Row, ListGroup, Badge, Col } from "react-bootstrap";

function UserList(props) {
	return (
		<Row className="align-items-center justify-content-md-center">
			<Col lg="6">
				<ListGroup>
					{props.data.map((item, index) => {
						return (
							<ListGroup.Item
								as="li"
								className="d-flex justify-content-between align-items-start"
                                key={index}
							>
								{item.username}
								<Badge variant="primary" pill>
									{item.Age}
								</Badge>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Col>
		</Row>
	);
}

export default UserList;
