import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import { Link } from 'react-router-dom'
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.jsx";

const style = {
  ...imagesStyles,
  textMuted: {
    color: "#6c757d"
  },
  categoryCard: {
      overflow: "hidden"
  },
  cardBody: {
      transition: "background-color 0.6s, padding 0.6s",
      backgroundColor: "rgba(0,0,0,0)",
      paddingTop: "100%",
      "&:hover": {
          backgroundColor: "rgba(0,0,0,0.6)",
          paddingTop: "20px"
      }
  },
  cardTitle: {
      color: "#ffffff",
      fontWeight: "bold",
      Position: "relative",
      marginTop: "20%",
      textAlign: "center",
      textShadow: "2px 2px 5px black"
  },
  cardText: {
    color: "#ffffff",
    fontWeight: "bold",
    Position: "relative",
    marginTop: "-2%",
    textAlign: "center",
    textShadow: "2px 2px 5px black"
  },
  cardCon: {
      overflow: "hidden"
  }
};

class Sidebar extends React.Component {
  render() {
    const { classes, category } = this.props;

    return(
        <Link to="/category/category">
        <Card className={classes.cardCon}>
          <img className={classes.imgCardTop} src={category.image} alt={category.name} />
          <CardBody className={classes.imgCardOverlay+" "+classes.cardBody}>
            <h3 className={classes.cardTitle}>{category.name}</h3>
            <p className={classes.cardText}>{category.info}</p>
          </CardBody>
        </Card>
        </Link>
    );
  }
};

export default withStyles(style)(Sidebar);