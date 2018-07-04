import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import LeftLink from "../../components/Header/LeftLinks.jsx";
import Stage from "./Sections/Stage.jsx";
import Slider from "../../components/Parallax/Slider.jsx";
import {getSliders, getCategories} from "../../actions/actions_front.jsx";

class Home extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
        loader: "block"
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getSliders())
    dispatch(getCategories()).then( () => {
      this.stopLoader();
    });
  }

  stopLoader() {
    this.setState(...this.state, {loader: "none"});
  }

  render() {
    const { classes, front, ...rest } = this.props;
    
    const loaderStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: "10000",
      backgroundColor: "#ffffff",
      backgroundImage: `url('${require('../../assets/img/logo.png')}')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: ".98",
      display: this.state.loader
    };

    return (
      <div>
        <div style={loaderStyle}></div>
        <Header
          brand="Bezop Store"
          rightLinks={<HeaderLinks />}
          leftLinks={<LeftLink />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <Slider classes={classes} slides={front.sliders} />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <Stage categories={front.categories} />
        </div>
        <Footer topFooter={true} />
      </div>
    );
  }
}


export default Home;
