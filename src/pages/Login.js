import React from "react";
import { Redirect } from "react-router";
import { Button, Card, Form, Modal } from "semantic-ui-react";
import "../style/Login.scss";
import { Link } from "react-router-dom";
// import backend from "../api/backend";

export default class LogIn extends React.Component {
	constructor(props) {
		super(props);

		this._isMounted = false;
		this.state = {
			userName: "",
			password: "",
			response: "",
			redirect: false,
			showModal: false,
		};
	}

	componentDidMount() {
		this._isMounted = true;
	}

	// to do link buttons to pages
	// link up api calls
	validateLogin = async (event) => {
		event.preventDefault();
		// const response = await backend.post("/validateUser", {
		// 	body: JSON.stringify({
		// 		username: this.state.userName.toLowerCase(),
		// 		password: this.state.password,
		// 	}),
		// });
		// let userId = response.data.user_id
		let userId = 1;
		if (this._isMounted) {
			this.props.context.updateUser_id(userId);
			this.props.context.updateUsername(this.state.userName);
			this.props.context.updateIsSignedIn("true");
			this.setState({ showModal: true });
		}
	};

	handleRedirect = (event) => {
		this.setState({});
	};

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		if (this.state.redirect) {
			return <Redirect push to='/' />;
		}

		return (
			<div className='LogIn'>
				<Card
					style={{ width: "30rem", height: "32rem", backgroundColor: "cadetblue" }}
					bg='dark'
					text='light'
				>
					<Card.Content>
						<Card.Header>Log in</Card.Header>
						<Form onSubmit={this.validateLogin}>
							<Form.Field controlId='userName'>
								<label style={{ color: "white" }}>Username</label>
								<input
									autoFocus
									value={this.state.userName}
									onChange={(e) => this.setState({ userName: e.target.value })}
									placeholder='Enter your username'
								/>
							</Form.Field>
							<Form.Field controlId='password'>
								<label style={{ color: "white" }}>Password</label>
								<input
									value={this.state.password}
									onChange={(e) => this.setState({ password: e.target.value })}
									placeholder='Enter password'
								/>
							</Form.Field>
							<div style={{ paddingTop: "15px" }}>
								<Button block size='large' type='submit' variant='danger'>
									Log In
								</Button>
							</div>
						</Form>

						<div className='text-muted'>Don't have an account?</div>
						<Button onClick={this.signUp} size='small' type='submit' variant='danger'>
							{/* <Nav.Item>
								<Nav.Link href='/Signup'>SignUp</Nav.Link>
							</Nav.Item> */}
							<Link to='/Signup'>Sign Up</Link>
						</Button>
					</Card.Content>
				</Card>

				<Modal open={this.state.showModal} onClose={() => this.setState({ showModal: false })}>
					<Modal.Header>Logged In Sucessfully</Modal.Header>
					<Modal.Content>You are logged in as {this.props.context.userName}</Modal.Content>
					<Modal.Actions>
						<Button
							color='black'
							onClick={() => {
								this.setState({ redirect: true });
							}}
						>
							Continue
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}
