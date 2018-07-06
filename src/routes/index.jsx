//@desc The main router of the application
//@author Muhammed Odunayo
//@co author Sylvia Onwukwe
//@co author Ifeoluwa Odewale
import Home from "../containers/Home";
import LandingPage from "../containers/LandingPage";
import ProfilePage from "../containers/ProfilePage";
import LoginPage from "../containers/LoginPage.jsx";
import Dashboard from "../layouts/Dashboard/Dashboard.jsx";
import Messages from "../layouts/Dashboard/Dashboard.jsx";
import Products from "../layouts/Dashboard/Dashboard.jsx";
import Orders from "../layouts/Dashboard/Dashboard.jsx";
import Coupons from "../layouts/Dashboard/Dashboard.jsx";
import Banner from "../layouts/Dashboard/Dashboard.jsx";
import Shop from "../layouts/Dashboard/Dashboard.jsx";
import Support from "../layouts/Dashboard/Dashboard.jsx";
import UserProfile from "../layouts/Dashboard/Dashboard.jsx";
import App from '../containers/App';

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/dashboard/messages", name: "Messages", component: Messages},
  { path: "/dashboard/products", name: "Products", component: Products},
  { path: "/dashboard/settings", name: "Settings", component: Shop},
  { path: "/dashboard/coupons", name: "Coupons", component: Coupons},
  { path: "/dashboard/support", name: "Support", component: Support},
  { path: "/dashboard/banner", name: "banners", component: Banner},
  { path: "/dashboard/orders", name: "Orders", component: Orders},
  { path: "/dashboard", name:"Dashboard", component: Dashboard},
  { path: "/user", name: "Users", component: UserProfile},
  { path: "/app", name: "App", component: App },
  { path: "/", name: "Components", component: Home }
];

export default indexRoutes;
