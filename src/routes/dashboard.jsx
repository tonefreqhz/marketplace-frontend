//@desc These are the sidebar items/routes
//@author Sylvia Onwukwe
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Store from "@material-ui/icons/Store";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Loyalty from "@material-ui/icons/Loyalty";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Email from "@material-ui/icons/Email"
// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import TableList from "../views/Order/order.jsx";
import Products from "../views/Products/products.jsx"
import Coupons from "../views/Coupons/coupon.jsx"
import Shop from "../views/Shop/shop.jsx"
import Support from "../views/Support/support.jsx"
import UpgradeToPro from "../views/UpgradeToPro/UpgradeToPro.jsx";
import Banners from "../views/Banners/banners.jsx";
import Messages from "../views/Messages/Messages.jsx"

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/messages",
    sidebarName: "Messages",
    navbarName: "Messages",
    icon: Email,
    component: Messages
  },
  {
    path: "/products",
    sidebarName: "Products",
    navbarName: "Products",
    icon: Store,
    component: Products
  },
  {
    path: "/orders",
    sidebarName: "Orders",
    navbarName: "Orders",
    icon: ShoppingCart,
    component: TableList
  },
  {
    path: "/coupons",
    sidebarName: "Discount Coupons",
    navbarName: "Discount Coupons",
    icon: Loyalty,
    component: Coupons
  },
  {
    path: "/banner",
    sidebarName: "Banners",
    navbarName: "Banners",
    icon: LocationOn,
    component: Banners
  },
  {
    path: "/settings",
    sidebarName: "Store Settings",
    navbarName: "Store Settings",
    icon: Notifications,
    component: Shop
  },
  {
    path: "/support",
    sidebarName: "Support Tickets",
    navbarName: "Support Tickets",
    icon: Notifications,
    component: Support
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "View Homepage",
    navbarName: "View Homepage",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
