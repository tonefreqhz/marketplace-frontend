//@desc this is the Email Template component on the admin dashboard.
//@author Sylvia Onwukwe
import React from 'react';

import NavPills from "../../components/NavPills/NavPills.jsx";
import PasswordReset from './PasswordReset/passwordReset';
import AccountRegistration from './AccountRegistration/account';
import AccountVerification from './AccountVerification/verification';
import OrderNotification from "./OrderNotification/order.jsx";
import Message from "./MessageNotification/notifications.jsx";


class EmailTemplate extends React.Component{
    render (){
        return (
            <NavPills 
            color="primary"
            tabs={[
                {
                    tabButton: "Password Reset",
                    tabContent: (
                    <span>
                        <p>
                        <PasswordReset />
                        </p>
                    </span>
                    )
                },
                {
                    tabButton: "Account Registration",
                    tabContent: (
                    <span>
                        <p>
                        <AccountRegistration />
                        </p>
                    </span>
                    )
                },
                {
                    tabButton: "Account Verification",
                    tabContent: (
                    <span>
                        <p>
                        <AccountVerification />
                        </p>
                    </span>
                    )
                },
                {
                    tabButton: "Order Notification",
                    tabContent: (
                    <span>
                        <p>
                        <OrderNotification />
                        </p>
                    </span>
                    )
                },
                {
                    tabButton: "Message Notification",
                    tabContent: (
                    <span>
                        <p>
                        <Message />
                        </p>
                    </span>
                    )
                },
                ]}
            />
        );
        }
}
export default EmailTemplate;