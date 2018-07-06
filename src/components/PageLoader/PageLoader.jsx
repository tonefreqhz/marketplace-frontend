/**
 * @description The pageLoader component.
 * @author Mohammed Odunayo
 * @class PageLoader
 * @name PageLoader
 */

import React from 'react';
import loaderImage from "../../assets/img/BezopLogo.svg";

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
            <div style={loaderStyle}>
                <div className={"fa-spin"} style={loaderStyle}></div>
            </div>
        );
    }
}