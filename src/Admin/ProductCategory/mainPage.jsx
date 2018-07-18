//@desc this is the main product category component on the admin dashboard displaying all category types as tabs.
//@author Sylvia Onwukwe
import React from 'react';

import NavPills from "../../components/NavPills/NavPills.jsx";
import MainCategory from "./MainCategory/mainCategory.jsx"
import SubCategory from "./SubCategory/subCategory.jsx"
import ChildCategory from "./ChildCategory/childCategory.jsx"

class AdminProductCategory extends React.Component{
  render () {
  return (
    <NavPills 
      color="primary"
      tabs={[
        {
          tabButton: "Main Categories",          tabContent: (
                  <MainCategory />
          )
        },
        {
          tabButton: "Sub Categories",
          tabContent: (
           
               <SubCategory />

          )
        },
        {
          tabButton: "Child Categories",
          tabContent: (
           
                <ChildCategory />
            
          )
        },
      ]}
    />
  );
}
}
export default AdminProductCategory;