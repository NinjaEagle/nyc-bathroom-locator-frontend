import React from "react";

const AppContext = React.createContext();

class MyProvider extends React.Component {
	state = {
		// context variables
		userName: sessionStorage.getItem("userName"),
		user_id: sessionStorage.getItem("user_id"),
		posts: sessionStorage.getItem("posts"),
		comments: sessionStorage.getItem("comments"),
		currentPost: sessionStorage.getItem("currentPost"),
		isSignedIn: sessionStorage.getItem("isSignedIn"),
		text: sessionStorage.getItem("isSignedIn"),

		// need to bind functions to keep simple syntax
		updateText: (text) => this.updateText(text),
		initRestrooms: (initRestrooms) => this.initRestrooms(initRestrooms),
		updateUser_id: (user_id) => this.updateUser_id(user_id),
		updateUsername: (userName) => this.updateUsername(userName),
		updatePosts: (posts) => this.updatePosts(posts),
		updateIsSignedIn: (isSignedIn) => this.updateIsSignedIn(isSignedIn),
		newReview: (review) => this.newReview(review),

		updateCurrentPost: (currentPost) => this.updateCurrentPost(currentPost),
	};

	updateCurrentPost(cPost) {
		sessionStorage.setItem("currentPost", JSON.stringify(cPost));
		this.setState({ currentPost: cPost });
	}

	initRestrooms(initRestrooms) {
		sessionStorage.setItem("posts", JSON.stringify(initRestrooms));
		this.setState({ posts: initRestrooms });
	}

	updateText(text) {
		sessionStorage.setItem("text", text);
		this.setState({ text });
	}

	updateUser_id(user_id) {
		sessionStorage.setItem("user_id", user_id);
		this.setState({ user_id });
	}

	updateUsername(userName) {
		sessionStorage.setItem("userName", userName);
		this.setState({ userName });
	}

	updatePosts(addPosts) {
		sessionStorage.setItem("addPosts", JSON.stringify([...this.state.posts, addPosts]));
		this.setState({ posts: [...this.state.posts, addPosts] });
	}

	updateIsSignedIn(isSignedIn) {
		sessionStorage.setItem("isSignedIn", isSignedIn);
		this.setState({ isSignedIn });
	}

	render() {
		return (
			<AppContext.Provider value={{ context: this.state }}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

export { MyProvider, AppContext };
