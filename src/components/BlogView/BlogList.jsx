/**
 * @description The blog list view component which renders the blog list view.
 * @author Mohammed Odunayo
 * @class BlogList
 * @name BlogList
 */

import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Avatar, Hidden } from "@material-ui/core";
import { Comment } from "@material-ui/icons";
// core components
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.jsx";
import { cardTitle } from "../../assets/jss/material-kit-react.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";

const style = {
    ...imagesStyles,
    cardTitle,
    textMuted: {
      color: "#6c757d"
    },
    cardButton: {
        padding: "0px",
        margin: "0px",
        fontWeight: "normal",
        width: "100%"
    },
    cardCon: {
        overflow: "hidden",
        margin: "0px"
    },
    con: {
        margin: "50px 0px"
    },
    cardBody: {
        padding: 0,

    },
    cardText: {
        fontSize: "1em"
    },
    avatar: {
      margin: "10px 10px 0px 0px",
      width: 50,
      height: 50,
      float: "left"
    },
    cardFootText: {
        fontSize: "1em",
        marginTop: "30px"
    },
    postButtonCon: {
        float: "right",
        marginTop: 14
    }
  };

class BlogList extends React.Component {

    render() {
      const { classes, img } = this.props;
      
      return (
        <div>
            <GridContainer className={classes.con}>
                <GridItem sm={(img)? 12 : null} md={(img)? 4 : null} className={classes.scene}>
                    <Hidden mdUp>
                        <Avatar
                            alt="User"
                            src="https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg?auto=compress&cs=tinysrgb&h=350"
                            className={classes.avatar}
                        />
                        <p className={classes.cardFootText}>By <strong>Author Name</strong>, Post Date</p>
                    </Hidden>
                    <br/>
                    {(img)?
                    <Link to="/blog/blog" className={classes.card}>
                        <Button simple="true" className={classes.cardButton}>
                            <Card className={classes.cardCon}>
                                <img className={classes.imgCardTop}
                                    src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&h=350"
                                    alt="Blog"
                                />
                            </Card>
                        </Button>
                    </Link>
                    :
                    null}
                </GridItem>
                <GridItem sm={12} md={(img)? 8 : 12}>
                    <CardBody className={classes.cardBody}>
                        <Link to="/blog/blog" className={classes.card}>
                            <h3 className={classes.cardTitle}>Article Title</h3>
                        </Link>
                        <p className={classes.cardText}>
                        Like so many organizations these days, Autodesk is a company in transition.
                        It was until recently a traditional boxed software company selling licenses.
                        Yet its own business model disruption is only part of the story — and
                        <Link to="/blog/blog"> Read More...</Link>
                        </p>
                        <div className={classes.postButtonCon}>
                            <Button color="primary" simple="true"><Comment /> Post Comment</Button>
                        </div>
                        <Hidden smDown>
                            <Avatar
                                alt="User"
                                src="https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg?auto=compress&cs=tinysrgb&h=350"
                                className={classes.avatar}
                            />
                            <p className={classes.cardFootText}>By <strong>Author Name</strong>, Post Date</p>
                        </Hidden>
                    </CardBody>
                </GridItem>
            </GridContainer>
        </div>
      );
    }
  }

  BlogList.prototypes = {
    classes: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  };

  export default withStyles(style)(BlogList);
