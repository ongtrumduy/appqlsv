import React from "react";
import "./UserDashBoard.css"
import request from "request";
import Home from "../../Content/Home";
import Friend from "../../Content/Friend";
import Message from "../../Content/Message";
import Notify from "../../Content/Notify";
import Profile from "../../Content/Profile";
import ChangePass from "../../Content/ChangePass";

export default class UserDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content_state: 0
    };
  }

  updateContentState = state => {
    this.setState({ content_state: state });
  };

  renderContent = () => {
    switch (this.state.content_state) {
      case 1: return (<div className="user-body-render"><Profile /></div>);
      case 2: return (<div className="user-body-render"><Friend /></div>);
      case 3: return (<div className="user-body-render"><Message /></div>);
      case 4: return (<div className="user-body-render"><Notify /></div>);
      case 5: return (<div className="user-body-render"><ChangePass /></div>);
      default: return (<div className="user-body-render"><Home /></div>);
    }
  };

  userDashBoard = () => {
    return (
      <div>
        <div className="user-container">

          <div className="user-header">
            <h1>APP KẾT NỐI TRÒ CHUYỆN VÀ HẸN HÒ SINH VIÊN</h1>
          </div>

          <div className="user-content">

            <div className="user-menu">

              <div className="user-menu-search">
                <input type="text" />
              </div>

              <div className="user-firstname">
                <p>Duy</p>
              </div>

              <div className="user-menu-home">
                <input type="button" value="TRANG CHỦ" onClick={() => { this.updateContentState(0); }} />
              </div>

              <div className="user-menu-friend">
                <input type="button" value="BẠN BÈ" onClick={() => { this.updateContentState(1) }} />
              </div>

              <div className="user-menu-message">
                <input type="button" value="TIN NHẮN" onClick={() => { this.updateContentState(2); }} />
              </div>

              <div className="user-menu-notify">
                <input type="button" value="THÔNG BÁO" onClick={() => { this.updateContentState(3); }} />
              </div>

              <div className="user-menu-logout" >
                <input type="button" value="ĐĂNG XUẤT" onClick={() => { this.props.update_login(); }} />
              </div>

            </div>

          </div>

          <div className="user-body">

            <div className="user-body-render">
              {this.renderContent()}
            </div>

            <div className="user-body-online">

              <div className="user-body-online-title">
                <p>ONLINE</p>
              </div>

              <div className="user-body-online-render">

              </div>

            </div>
          </div>

          <div className="user-footer">
            <p>App kết nối trò chuyện và hẹn hò Sinh viên ver 1.0</p>
            <p>Design by Project 1-<a href="https://www.facebook.com/thoiloanhhung">Phạm Duy</a>- Đại học Bách khoa Hà Nội</p>
            <p>
              Hanoi University of Science and Technology - No. 1, Dai Co Viet
              Str., Hanoi, Vietnam
            </p>
          </div>

        </div>
      </div >
    );
  }

  render() {
    return (
      <div>
        {this.userDashBoard()}
      </div>
    )
  }
}
