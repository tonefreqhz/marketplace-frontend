//@desc this is the 'store setiings' componenent 
//@author Sylvia Onwukwe
import React from 'react';

import NavPills from "../../components/NavPills/NavPills.jsx";
import HomePage from "./homepage.jsx"
import SocialMedia from './socialmedia';
import SEO from './seo';

function Shop({...props}){
  return (
    <NavPills 
      color="primary"
      tabs={[
        {
          tabButton: "HomePage",
          tabContent: (
            <span>
              <p>
                <HomePage />
              </p>
            </span>
          )
        },
        {
          tabButton: "Social Media",
          tabContent: (
            <span>
              <p>
               <SocialMedia />
              </p>
            </span>
          )
        },
        {
          tabButton: "SEO",
          tabContent: (
            <span>
              <p>
                <SEO />
              </p>
            </span>
          )
        },
      ]}
    />
  );
}

export default Shop;