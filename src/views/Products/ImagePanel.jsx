import React from "react";
import ImagePlaceholder from "./Category/ImagePlaceholder";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";

import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";

import cardImagesStyles from "../../assets/jss/material-kit-react/cardImagesStyles";




class ImagePanel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imgObj: this.props.imgObj,
            eachData: this.props.eachData,
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps.product.hasOwnProperty("updateImage")){
            let newEachData = JSON.parse(JSON.stringify(newProps.product.updateImage));
            this.setState({
                eachData: newEachData
            })
        }
    }
    
    render(){
        //console.log(this.props.eachData);
        const {imgObj, eachData} = this.state;
        const {postImage, collection} = this.props;
        return (
            <div>
                <Card >
                <CardBody>
                <Grid container>
                {imgObj.map((img, key) => {
                    return (
                        <GridItem xs={12} md={4} key={`${img.label}${key}`}>
                            <ImagePlaceholder 
                            srcImage={eachData[img.label]} 
                            label={img.label}
                            eachData={eachData} 
                            fileInput={`${img.label}${eachData.id}`}
                            fullwidth={img.fullWidth} 
                            width={img.width}
                            height={img.height}
                            postImage={postImage}
                            collection={collection}
                            />
                            
                                <h4 style={{fontWeight:"bolder", textAlign: "center"}}>{img.imgType}</h4>
                        </GridItem>
                    )
                })}
                    </Grid>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default withStyles(cardImagesStyles)(ImagePanel);