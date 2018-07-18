//@desc this is the store settings component on the admin dashboard.
//@author Sylvia Onwukwe
import React from 'react';

import NavPills from "../../components/NavPills/NavPills.jsx";
import GeneralSettings from "./GeneralSetting/generalSetting.jsx";
import SocialLinks from "./SocialLinks/socialLinks.jsx";
import TermsAndConditions from './TermsAndConditions/termsAndConditions.jsx';
import Smtp from './SmtpSetting/smtpsetting';
import Slider from './DisplaySetting/slider';
import PrivacyPolicy from './PrivacyPolicy/privacyPolicy';
import ContactPage from './ContactPage/contactPage';


class AdminStore extends React.Component{
  render (){
  return (
    <NavPills 
      color="primary"
      tabs={[
        {
            tabButton: "General Settings",
            tabContent: (
                 <GeneralSettings />
            )
          },
          {
            tabButton: "Display Settings",
            tabContent: (
              <Slider />
            )
          },
          {
            tabButton: "Smtp Settings",
            tabContent: (
                 <Smtp />
            )
          },
          {
            tabButton: "Social Links",
            tabContent: (
                 <SocialLinks />
            )
          },
          {
            tabButton: "Terms And Conditions",
            tabContent: (
                 <TermsAndConditions />
            )
          },
          {
            tabButton: "Privacy Policy",
            tabContent: (
                 <PrivacyPolicy />
            )
          },
        {
            tabButton: "Contact Page",
            tabContent: (
                 <ContactPage />

            )
          },
      ]}
    />
  );
}
}
export default AdminStore;