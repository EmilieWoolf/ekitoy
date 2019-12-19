import React, {Component}from 'react'
import GoogleLogin from 'react-google-login'


class Google extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseGoogle = response => {

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };

    componentClicked = () => console.log("clicked");

    render() {
        let GgContent;
        if (this.state.isLoggedIn) {
            GgContent = (
                <div
                    style={{
                        width: "400px",
                        margin: "auto",
                        background: "#f4f4f4",
                        padding: "20px"
                    }}
                >
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            );
        } else {
            GgContent = (
                <GoogleLogin
                    clientId="568862292717-olt2q0tp6se4dtgu44ev5l7qdukhek74.apps.googleusercontent.com"
                    buttonText="Login"
                    // onSuccess={responseGoogle}
                    // onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> 

            );
        }

        return <div>{GgContent}</div>;
    }
}

export default Google;












