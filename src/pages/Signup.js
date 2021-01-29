import React from "react";
import { Redirect } from "react-router";
import { Button, Card, Form, Modal } from "semantic-ui-react";
import "../style/Signup.scss";
import backend from "../api/backend";

export default class Signup extends React.Component {
	state = {
		userName: "",
		password: "",
		confirmPassword: "",

		noMatch: false,
		redirect: false,
		showModal: false,
		userAlreadyExists: false,
	};

	//  link up api calls and input validations
	createAccount = async (event) => {
		event.preventDefault();
		if (this.state.password !== this.state.confirmPassword) {
			this.setState({ noMatch: true });
			return;
		}

		const response = await backend.post("/users", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				username: this.state.userName,
				password: this.state.password,
			}),
		});
		console.log("response back", response);
		if (response.data.success === "true") {
			console.log("it worked");
			this.setState({ showModal: true });
		} else {
			this.setState({});
			this.setState({ userAlreadyExists: true });
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect push to='/Login' />;
		}

		return (
			<div className='SignUp'>
				{this.state.noMatch === true && <h5>Password and Confirm Password do not match!</h5>}
				{this.state.userAlreadyExists === true && (
					<h5>This username already exists please try another one</h5>
				)}
				<Card style={{ width: "30rem", height: "34rem", backgroundColor: "cadetblue" }}>
					<Card.Content>
						<Card.Header>Sign Up</Card.Header>
						<Form onSubmit={this.createAccount}>
							<Form.Field>
								<label style={{ color: "white" }}>Username</label>
								<input
									autoFocus
									value={this.state.userName}
									onChange={(e) => this.setState({ userName: e.target.value })}
									placeholder='Enter a username'
								/>
							</Form.Field>

							<Form.Field>
								<label style={{ color: "white" }}>Password</label>
								<input
									value={this.state.password}
									onChange={(e) => this.setState({ password: e.target.value })}
									placeholder='Enter password'
								/>
							</Form.Field>
							<Form.Field controlId='confirmPassword'>
								<label style={{ color: "white" }}>Confirm Password</label>
								<input
									value={this.state.confirmPassword}
									onChange={(e) => this.setState({ confirmPassword: e.target.value })}
									placeholder='Confirm password'
								/>
							</Form.Field>

							<div style={{ paddingTop: "20px" }}>
								<Button block size='large' type='submit' variant='danger'>
									Create Account
								</Button>
							</div>
						</Form>
					</Card.Content>
				</Card>

				<Modal onOpen={this.state.showModal} onClose={() => this.setState({ showModal: false })}>
					<Modal.Header closeButton>
						<Modal.Title>Account Creation Successful!</Modal.Title>
					</Modal.Header>
					<Modal.Content>
						You will be redirected to the Login Page {this.state.userName}
					</Modal.Content>
					<Button
						variant='primary'
						onClick={() => {
							this.setState({ redirect: true });
						}}
					>
						Continue
					</Button>
				</Modal>
			</div>
		);
	}
}
