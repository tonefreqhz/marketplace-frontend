/**
 * @description The login page view.
 * @author Mohammed Odunayo
 * @class LoginPage
 * @name Login
 */

import React from "react";
// core components
import Footer from "../../components/Footer/Footer.jsx";
import image from "../../assets/img/img3.jpg";
import Events from "events";
import UsersAuth from "../../components/Auth/UsersAuth";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.user = this.props.match.url.replace("/login/", "").replace("/","");

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.events = new Events();
  }
  componentDidMount() {
    this.events.emit('pageLogin', this.user);
  }
  render() {

    document.title = this.user + " Login @ Bezop Store || Worlds First Decentralized Store";
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <UsersAuth events={this.events} />
          <div style={{position: "fixed", bottom: "1%", zIndex: "10000", width: "100%"}}>
          <Footer whiteFont />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
