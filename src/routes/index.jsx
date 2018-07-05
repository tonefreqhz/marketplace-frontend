import Home from "../containers/Home";
import LoginPage from "../containers/LoginPage.jsx";
import App from '../containers/App';
import Category from "../containers/Category";
import Vendor from "../containers/Vendor";

var indexRoutes = [
  { path: "/category/", name: "Category", component: Category },
  { path: "/vendor/", name: "Vendor", component: Vendor },
  { path: "/categories", name: "Categories", component: Category },
  { path: "/vendors", name: "Vendors", component: Vendor },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/app", name: "App", component: App },
  { path: "/", name: "Components", component: Home }
];

export default indexRoutes;
