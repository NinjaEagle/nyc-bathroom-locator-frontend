import React from "react";
import { Card, Button, Modal } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import "../style/Signout.scss";

export default class Signout extends React.Component {
	state = {
		cancel: false,
		showModal: false,
		redirect: false,
	};

	handleSignOut = (e) => {
		e.preventDefault();
		this.props.context.updateIsSignedIn("false");
		this.props.context.updateUsername("");
		this.props.context.updateUser_id("");
		this.setState({ showModal: true });
	};

	render() {
		if (this.state.cancel) {
			return <Redirect push to='/' />;
		}

		if (this.state.redirect) {
			return <Redirect push to='/' />;
		}

		return (
			<React.Fragment>
				<div className='signout'>
					<Card>
						<Card.Header>
							Are you sure you want to sign out {this.props.context.userName}?
						</Card.Header>
						<Card.Content>
							<Button onClick={this.handleSignOut} positive icon='checkmark'>
								Yes
							</Button>
							<Button
								onClick={() => {
									this.setState({ cancel: true });
								}}
								color='red'
							>
								No
							</Button>
						</Card.Content>
					</Card>

					<Modal
						class='modal'
						open={this.state.showModal}
						onClose={() => this.setState({ showModal: false })}
					>
						<Modal.Header>Sign out successful!</Modal.Header>
						<Modal.Content>
							You will be redirected to the Sign out page {this.state.userName}
						</Modal.Content>

						<Button
							onClick={() => {
								this.setState({ redirect: true });
							}}
						>
							Continue
						</Button>
					</Modal>
				</div>
			</React.Fragment>
		);
	}
}
