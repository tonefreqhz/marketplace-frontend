//@desc These are the images in the banner slider
//@author Sylvia Onwukwe
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import image1 from "../../assets/img/bg.jpg";
import image2 from "../../assets/img/bg2.jpg";
import image3 from "../../assets/img/bg3.jpg";
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import DeleteModal from "./deletemodal.jsx"


const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
    justifyContent: 'center'
  },
  bigAvatar: {
    width: 200,
    height: 200,
  },
};

function BannerImages(props) {
  const { classes } = props;
  return (
    <div>
        <GridContainer >
        <GridItem xs={12} sm={12} md={4}>
      <Avatar
        alt="First Slide"
        src={image1}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      <DeleteModal />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
      <Avatar
        alt="Second Slide"
        src={image2}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      <DeleteModal />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
      <Avatar
        alt="Third Slide"
        src={image3}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      <DeleteModal />
      </GridItem>
      </GridContainer>
      
    </div>
  );
}

BannerImages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BannerImages);