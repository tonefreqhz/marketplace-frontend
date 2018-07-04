import React from 'react';

import loaderImage from "../../assets/img/logo.png";

export class PageLoader extends React.Component {

    render() {

        const loaderStyle = {
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: "10000",
            backgroundColor: "#ffffff",
            backgroundImage: `url('${loaderImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: ".98",
            display: this.props.display
        };

        return(
            <div style={loaderStyle}></div>
        );
    }
}