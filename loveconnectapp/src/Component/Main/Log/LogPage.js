import React from "react";
import Login from "./Login";
import Register from "./Register";

export default class LogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iSign: false
        }
    }

    updateLogPage = () => {
        if (this.state.iSign) {
            return (
                <Login uplogin={this.updateLogin()} />
            )
        } else {
            return (
                <Register updateRegister={this.updateRegister()} />
            )
        }
    }

    updateLogin = () => {
        this.setState({
            iSign: false
        })
    }

    updateRegister = () => {
        this.setState({
            iSign: true
        })
    }

    render() {
        return (
            <div>
                {this.updateLogPage()}
            </div>
        )
    }
}