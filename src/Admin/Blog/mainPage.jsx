//@desc this is the main blog component on the admin dashboard displaying all blog and blog categories.
//@author Sylvia Onwukwe
import React from 'react';

import NavPills from "../../components/NavPills/NavPills.jsx";
import Blog from "./blog.jsx"
import BlogCategory from "./blogCategories.jsx"

class AdminBlog extends React.Component{
  render (){
  return (
    <NavPills 
      color="primary"
      tabs={[
        {
          tabButton: "Blogs",         
          tabContent: (
                 <Blog />
          )
        },
        {
          tabButton: "Blog Categories",
          tabContent: (
               <BlogCategory />
          )
        },
      ]}
    />
  );
}
}
export default AdminBlog;