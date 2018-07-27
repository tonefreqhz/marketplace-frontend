/**
 * @description The profile blog.
 * @author Mohammed Odunayo
 * @class Blogs
 * @name Blogs
 */

import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import ProfileDetailTable from "./ProfileDetailTable";

class Blogs extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <GridContainer justify="center" spacing={40}>
                <GridItem xs={12}>
                    <ProfileDetailTable
                        title={"My Blog Posts"}
                    />
                </GridItem>
            </GridContainer>
        );
    }
}

export default Blogs;