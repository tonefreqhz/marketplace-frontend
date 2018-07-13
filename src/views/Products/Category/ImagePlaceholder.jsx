import React from "react";

class ImagePlaceholder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            srcImage: this.props.srcImage
        }
    }

    

    componentWillReceiveProps(newProps){
        if(this.props.srcImage !== newProps.srcImage){
            this.setState({
                srcImage: newProps.srcImage
            })
        }
    }

    componentDidUpdate(prevProps){
        //console.log(this.props.srcImage)
        if(this.props.srcImage !== prevProps.srcImage){
            this.setState({
                srcImage:this.props.srcImage
            })
        }
    }


    render(){
        const {srcImage} = this.state;
        const style = {width: "100%", marginBottom: "15px"};
        return (
                <img src={srcImage} alt="" style={style}/>
            )
    }
}

export default ImagePlaceholder;
