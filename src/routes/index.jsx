/**
 * @description The main router of the application.
 * @author Mohammed Odunayo
 * @co-author Sylvia Onwukwe
 * @co-author Ifeoluwa Odewale
 * @name index
 */

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

//User Router
import Home from "../containers/Home.jsx";
import Login from "../containers/Login.jsx";
import Page404 from "../containers/Page404.jsx";
import Category from "../containers/Category.jsx";
import CategoryProductList from "../containers/CategoryProductList.jsx";
import Brand from "../containers/Brand.jsx";
import Vendor from "../containers/Vendor.jsx";
import About from "../containers/AboutPage.jsx";
import Blogs from "../containers/BlogPage.jsx";
import BrandProductList from "../containers/BrandProductList.jsx";
import SingleBlog from "../containers/SingleBlogPage.jsx";
import Contact from "../containers/ContactPage.jsx";
import SingleProduct from "../containers/SingleProduct.jsx";
import ProductList from "../containers/ProductList.jsx";

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

  { path: "/categories", name: "Categories", component: Category },
  { path: "/category/:category", name: "CategoryProducts", component: CategoryProductList },
  { path: "/products/:products", name: "ProductList", component: ProductList },
  { path: "/products", name: "ProductList", component: ProductList },
  { path: "/product/:product", name: "Product", component: SingleProduct },
  { path: "/vendors", name: "Vendors", component: Vendor },
  { path: "/vendor/:vendor", name: "Vendor", component: Vendor },
  { path: "/brands", name: "Brands", component: Brand },
  { path: "/brand/:brand", name: "Brand", component: BrandProductList },
  { path: "/blog/:blog", name: "Blog", component: SingleBlog },
  { path: "/blogs", name: "Blog", component: Blogs },
  { path: "/login", name: "LoginPage", component: Login},
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/about", name: "About", component: About },
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "*", name: "Page404", component: Page404 },
];

export default indexRoutes;
