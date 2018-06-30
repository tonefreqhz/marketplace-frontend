import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";

import Parallax from "../../components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Stage from "./Sections/Stage.jsx";

import Carousel from "react-slick";

class Home extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div>
        <Header
          brand="Bezop Store"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <Carousel {...settings}>
          <Parallax className="slick-image" image={require("../../assets/img/img1.jpg")}>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", content: "", display: "block", height: "100%", left: 0, top: 0,
                  position: "absolute", width: "100%"}}></div>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div style={{textAlign: "center", color: "#ffffff"}}>
                    <h1 className={classes.title}>Bezop Store</h1>
                    <h3>
                    Worlds First Decentralized Store
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <Parallax className="slick-image" image={require("../../assets/img/img2.jpg")}>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", content: "", display: "block", height: "100%", left: 0, top: 0,
                  position: "absolute", width: "100%"}}></div>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div style={{textAlign: "center", color: "#ffffff"}}>
                    <h1 className={classes.title}>Bezop Store</h1>
                    <h3>
                    Worlds First Decentralized Store
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <Parallax className="slick-image" image={require("../../assets/img/img3.jpg")}>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", content: "", display: "block", height: "100%", left: 0, top: 0,
                  position: "absolute", width: "100%"}}></div>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div style={{textAlign: "center", color: "#ffffff"}}>
                    <h1 className={classes.title}>Bezop Store</h1>
                    <h3>
                    Worlds First Decentralized Store
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        </Carousel>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <Stage />
        </div>
        <Footer topFooter={true} />
      </div>
    );
  }
}


export default Home;
