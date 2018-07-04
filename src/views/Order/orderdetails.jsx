//@desc this is the tab containing order details when a vendor clicks view detail {vieworder.jsx}
//@author Sylvia Onwukwe
import React from 'react';

import NavPills from "../../components/NavPills/NavPills.jsx";
import ProductDetails from "./productdetails.jsx"
import ShipmentDetails from './shipmentdetails.jsx';
import PaymentDetail from './paymentdetails';

function OrderDetails({...props}){
  return (
    <NavPills 
      color="primary"
      tabs={[
        {
          tabButton: "Product Details",
          tabContent: (
            <span>
              <p>
              <ProductDetails />  
              </p>
            </span>
          )
        },
        {
          tabButton: "Payment Details",
          tabContent: (
            <span>
              <p>
              <PaymentDetail />
              </p>
            </span>
          )
        },
        {
          tabButton: "Shipment Details",
          tabContent: (
            <span>
              <p>
              <ShipmentDetails />
              </p>
            </span>
          )
        }
      ]}
    />
  );
}

export default OrderDetails;