import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

    }

    loginForm = () => {
        return (
            <div className="login" >
                <label>Mail đăng nhập (*)</label>
                <input type="text" value="" />
                <label>Mật khẩu (*)</label>
                <input type="text" value="" />
            </div>
        )
    }


    render() {
        return (
            <div>
                {this.loginForm()}
            </div>
        )
    }
}