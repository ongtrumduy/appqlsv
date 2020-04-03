import React from "react"
import "./FriendOnline.css"

export default class FriendOnline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    friendOnline = () => {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                        <tr>
                            <td>Phạm Duy</td>
                            <td><img src={require("../Image-Icon/Light Bulb On.png")} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.friendOnline()}
            </div>
        )
    }
}