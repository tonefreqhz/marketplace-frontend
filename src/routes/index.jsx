//@desc The main router of the application
//@author Muhammed Odunayo
//@co author Sylvia Onwukwe
//@co author Ifeoluwa Odewale
import Home from "../containers/Home";
import LoginPage from "../containers/LoginPage.jsx";

//Dashboard Router
import Dashboard from "../layouts/Dashboard/Dashboard.jsx";
import Messages from "../layouts/Dashboard/Dashboard.jsx";
import Products from "../layouts/Dashboard/Dashboard.jsx";
import Orders from "../layouts/Dashboard/Dashboard.jsx";
import Coupons from "../layouts/Dashboard/Dashboard.jsx";
import Banner from "../layouts/Dashboard/Dashboard.jsx";
import Shop from "../layouts/Dashboard/Dashboard.jsx";
import Support from "../layouts/Dashboard/Dashboard.jsx";
import UserProfile from "../layouts/Dashboard/Dashboard.jsx";

//Sample Container
import App from '../containers/App';
import Category from "../containers/Category";
import Vendor from "../containers/Vendor";

var indexRoutes = [
  { path: "/dashboard/messages", name: "Messages", component: Messages},
  { path: "/dashboard/products", name: "Products", component: Products},
  { path: "/dashboard/settings", name: "Settings", component: Shop},
  { path: "/dashboard/coupons", name: "Coupons", component: Coupons},
  { path: "/dashboard/support", name: "Support", component: Support},
  { path: "/dashboard/banner", name: "banners", component: Banner},
  { path: "/dashboard/orders", name: "Orders", component: Orders},
  { path: "/dashboard/user", name: "Users", component: UserProfile},
  { path: "/dashboard", name:"Dashboard", component: Dashboard},
  { path: "/category/", name: "Category", component: Category },
  { path: "/vendor/", name: "Vendor", component: Vendor },
  { path: "/categories", name: "Categories", component: Category },
  { path: "/vendors", name: "Vendors", component: Vendor },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/app", name: "App", component: App },
  { path: "/", name: "Components", component: Home }
];

export default indexRoutes;
