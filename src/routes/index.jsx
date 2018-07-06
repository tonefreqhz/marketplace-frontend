/**
 * @description The Router.
 * @author Mohammed Odunayo
 * @name index
 */

import Home from "../containers/Home.jsx";
import Login from "../containers/Login.jsx";
import Page404 from "../containers/Page404.jsx";
import Category from "../containers/Category.jsx";
import Brand from "../containers/Brand.jsx";
import Vendor from "../containers/Vendor.jsx";

var indexRoutes = [
  { path: "/categories", name: "Categories", component: Category },
  { path: "/category/", name: "Category", component: Category },
  { path: "/vendors", name: "Vendors", component: Vendor },
  { path: "/vendor/", name: "Vendor", component: Vendor },
  { path: "/brands", name: "Brands", component: Brand },
  { path: "/brand/", name: "Brand", component: Brand },
  { path: "/login", name: "LoginPage", component: Login},
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "*", name: "Page404", component: Page404 },
];

export default indexRoutes;
