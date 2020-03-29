import React from "react";
import "./DashBoard.css"
import request from "request";
import Home from ".../Content/Home";
import Friend from ".../Content/Friend";

export default class ParentDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //   UNSAFE_componentWillMount = () => {
  //     this.Hello(this.callname);
  //     this.helloParent();
  //   };

  //   Hello = callname => {
  //     var options = {
  //       method: "POST",
  //       url: "http://localhost:8081/DashBoard",
  //       headers: {
  //         "cache-control": "no-cache",
  //         Connection: "keep-alive",
  //         "Content-Length": "0",
  //         "Accept-Encoding": "gzip, deflate",
  //         Host: "localhost:8081",
  //         "Cache-Control": "no-cache",
  //         Accept: "*/*",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         checkLogout: "1"
  //       }),
  //     };

  //     request(options, function (error, response, body) {
  //       if (error) throw new Error(error);
  //       var bod = JSON.parse(body);
  //       console.log(bod);
  //       console.log(bod.name);
  //       callname(bod.name, bod.week, bod.term);
  //     });
  //   };

  //   callname = (_name, _week, _term) => {
  //     this.setState({
  //       fullname: _name,
  //       week: _week,
  //       term: _term
  //     });
  //   };

  //   updateContentState = state => {
  //     this.setState({ contentState: state });
  //   };

  renderContent = () => {
    switch (this.state.contentState) {
      case 1: return (<div><</div>)

      default: return (<div className="ql"><Home /></div>);
    }
  };

  helloParent = () => {
          setTimeout(() => {
            alert("Chào mừng Phụ huynh Sinh viên đến với trang Web theo dõi quản lí Sinh viên");
            alert("Vui lòng lựa chọn các thông tin phù hợp để đồng hành cùng Sinh Viên");
            // const LearnMoney = prompt("Vui lòng nhập tiền học bạn cung cấp tháng này cho Sinh viên:");
          }, 300)
          // clearTimeout(loalert);
        }

  userDashBoard = ()=> {
    return (
        <div>
          <div className="container">
            <div className="header">
              <h1>APP TRO CHUYEN VA HEN HO</h1>
            </div>
            <div className="s1">
            </div>
            <div className="body">
              <div className="hello">Xin chào, {this.state.fullname}</div>
              <input className="logout" type="button" value="ĐĂNG XUẤT" onClick={() => { this.props.updateLogout(); }} />
              <input className="changepassword" type="button" value="ĐỔI MẬT KHẨU" onClick={() => { this.updateContentState(1.2) }} />
              <div className="menu">

                <div className="menu-0">
                  <input type="button" value="TRANG CHỦ" onClick={() => { this.updateContentState(0); }} />
                </div>

                <div className="menu-1">
                  <input type="button" value="BANJ BE" onClick={() => { this.updateContentState(1) }} />
                </div>

                <div className="menu-2">
                  <input type="button" value="TIN NHAN" onClick={() => { this.updateContentState(2); }}></input>
                </div>

                <div className="menu-3">
                  <input type="button" value="THONG BAO" onClick={() => { this.updateContentState(3); }}></input>
                </div>

                <div className="menu-4">
                  <input type="button" value="LIÊN HỆ" onClick={() => { this.updateContentState(4); }} />
                </div>

                <div className="menu-5">
                  <input type="button" value="GIỚI THIỆU" onClick={() => { this.updateContentState(5); }} />
                </div>

              </div>

              {this.renderContent()}

            </div>
            <div className="s2"></div>

            <div className="footer">
              <p></p>
              <p>Design by Project 2-<a href="https://www.facebook.com/thoiloanhhung">Phạm Duy</a>- Đại học Bách khoa Hà Nội</p>
              <p>
                Hanoi University of Science and Technology - No. 1, Dai Co Viet
                Str., Hanoi, Vietnam
            </p>
            </div>
          </div>
        </div >
    );
  }


}
