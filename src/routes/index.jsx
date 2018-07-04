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
  { path: "/dashboard", name:"Dashboard", component: Dashboard},
  { path: "/messages", name: "Messages", component: Messages},
  { path: "/products", name: "Products", component: Products},
  { path: "/settings", name: "Settings", component: Shop},
  { path: "/coupons", name: "Coupons", component: Coupons},
  { path: "/support", name: "Support", component: Support},
  { path: "/banner", name: "banners", component: Banner},
  { path: "/orders", name: "Orders", component: Orders},
  { path: "/user", name: "Users", component: UserProfile},
  { path: "/app", name: "App", component: App },
  { path: "/", name: "Components", component: Home }
];

export default indexRoutes;
