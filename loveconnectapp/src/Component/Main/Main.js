import React from "react";
import AdminDashBoard from "./DashBoard/AdminDashBoard";
import UserDashBoard from "./DashBoard/UserDashBoard";
import LogPage from "./Log/LogPage";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iLogin: "Log"
        }
    }

    updateMain = () => {
        switch (this.state.iLogin) {
            case "Log": return (<div><LogPage /></div>);
            case "Admin": return (<div><AdminDashBoard /></div>);
            case "User": return (<div><UserDashBoard /></div>);
            default:
        }
    }

    updateLog = () => {
        this.setState({
            iLogin: "Log"
        })
    }

    updateAdmin = () => {
        this.setState({
            iLogin: "Admin"
        })
    }

    updateUser = () => {
        this.setState({
            iLogin: "User"
        })
    }

    render() {
        return (<div>
            {this.updateMain()}
        </div>)
    }
}