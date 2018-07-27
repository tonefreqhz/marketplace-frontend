/**
 * @description The main router of the application.
 * @author Mohammed Odunayo
 * @co-author Sylvia Onwukwe
 * @co-author Ifeoluwa Odewale
 * @name index
 */

import React from "react";
import { Redirect } from 'react-router'
import { userIs } from "../components/Auth/AccessControl.jsx";

//Vendor Containers
import Dashboard from "../layouts/Dashboard/Dashboard.jsx";
import Messages from "../layouts/Dashboard/Dashboard.jsx";
import Products from "../layouts/Dashboard/Dashboard.jsx";
import Orders from "../layouts/Dashboard/Dashboard.jsx";
import Coupons from "../layouts/Dashboard/Dashboard.jsx";
import Banner from "../layouts/Dashboard/Dashboard.jsx";
import Shop from "../layouts/Dashboard/Dashboard.jsx";
import Support from "../layouts/Dashboard/Dashboard.jsx";
import UserProfile from "../layouts/Dashboard/Dashboard.jsx";
// import Blog from "../layouts/Dashboard/Dashboard.jsx";

//Admin Containers
import Admin from "../Admin/LandingPage/layout.jsx";
import AdminProductCategory from "../Admin/LandingPage/layout.jsx";
import DiscountCoupon from "../Admin/LandingPage/layout.jsx";
import AdminCustomers from "../Admin/LandingPage/layout.jsx";
import AdminMessages from "../Admin/LandingPage/layout.jsx";
// import EmailTemplate from "../Admin/LandingPage/layout.jsx";
import AdminProduct from "../Admin/LandingPage/layout.jsx";
import AdminVendors from "../Admin/LandingPage/layout.jsx";
import AdminProfile from "../Admin/LandingPage/layout.jsx";
import AdminBrands from "../Admin/LandingPage/layout.jsx";
import AdminOrder from "../Admin/LandingPage/layout.jsx";
import AdminStore from "../Admin/LandingPage/layout.jsx";
import AdminBlog from "../Admin/LandingPage/layout.jsx";
import Currency from "../Admin/LandingPage/layout.jsx";
import Language from "../Admin/LandingPage/layout.jsx";

//Customer Containers
import Home from "../containers/Home.jsx";
import Cart from "../containers/Cart.jsx";
import Compare from "../containers/Compare.jsx";
import Login from "../containers/Login.jsx";
import Page404 from "../containers/Page404.jsx";
import Category from "../containers/Category.jsx";
import CategoryProductList from "../containers/CategoryProductList.jsx";
import Brand from "../containers/Brand.jsx";
import Vendor from "../containers/Vendor.jsx";
import VendorProductList from "../containers/VendorProductList.jsx";
import About from "../containers/AboutPage.jsx";
import Blogs from "../containers/BlogPage.jsx";
import BrandProductList from "../containers/BrandProductList.jsx";
import SingleBlog from "../containers/SingleBlogPage.jsx";
import Contact from "../containers/ContactPage.jsx";
import SingleProduct from "../containers/SingleProduct.jsx";
import ProductList from "../containers/ProductList.jsx";
import Profile from "../containers/ProfilePage.jsx";

var indexRoutes = [
  { path: "/admin/templates", name: "EmailTemplate", component: EmailTemplate},
  { path: "/admin/language", name: "Language", component: Language},
  { path: "/admin/currency", name: "Currency", component: Currency},

  /**
   * @description Admin Route Directories.
   */
  { 
    path: "/admin/categories",
    name: "AdminProductCategory",
    Component: (props) => userIs(["admin"])?
      <AdminProductCategory {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/customers",
    name: "Customers",
    Component: (props) => userIs(["admin"])?
      <AdminCustomers {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/messages",
    name:"AdminMessages",
    Component: (props) => userIs(["admin"])?
      <AdminMessages {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/settings",
    name: "AdminStore",
    Component: (props) => userIs(["admin"])?
      <AdminStore {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/products",
    name: "AdminProducts", 
    Component: (props) => userIs(["admin"])?
      <AdminProduct {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/vendors",
    name: "AdminVendors",
    Component: (props) => userIs(["admin"])?
      <AdminVendors {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/profile",
    name: "AdminProfile",
    Component: (props) => userIs(["admin"])?
      <AdminProfile {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/coupons", 
    name: "DiscountCoupons", 
    Component: (props) => userIs(["admin"])?
      <DiscountCoupon {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/orders",
    name: "AdminOrder",
    Component: (props) => userIs(["admin"])?
      <AdminOrder {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/brands",
    name: "AdminBrands",
    Component: (props) => userIs(["admin"])?
      <AdminBrands {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/blog",
    name: "AdminBlog",
    Component: (props) => userIs(["admin"])?
      <AdminBlog {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin/seo",
    name: "AdminSeo",
    Component: (props) => userIs(["admin"])?
      <AdminSeo {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  { 
    path: "/admin", 
    name: "Dashboard", 
    Component: (props) => userIs(["admin"])?
      <Admin {...props} />
      :
      <Redirect to={{ pathname: "/login/admin", state: { from: props.location } }} />
  },
  /**
   * @description Vendor Route Directories
   */
  { 
    path: "/dashboard/messages",
    name: "Messages",
    Component: (props) => userIs(["vendor"])?
      <Messages {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard/products/category",
    name: "Product Category",
    Component: (props) => userIs(["vendor"])?
      <Products {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard/products/brand",
    name: "Product Brand",
    Component: (props) => userIs(["vendor"])?
      <Products {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard/products",
    name: "Products",
    Component: (props) => userIs(["vendor"])?
      <Products {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard/settings",
    name: "Settings",
    Component: (props) => userIs(["vendor"])?
      <Shop {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard/coupons",
    name: "Coupons",
    Component: (props) => userIs(["vendor"])?
      <Coupons {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard/support",
    name: "Support",
    Component: (props) => userIs(["vendor"])?
      <Support {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard/banner",
    name: "banners",
    Component: (props) => userIs(["vendor"])?
      <Banner {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard/orders",
    name: "Orders",
    Component: (props) => userIs(["vendor"])?
      <Orders {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard/user",
    name: "Users",
    Component: (props) => userIs(["vendor"])?
      <UserProfile {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  { 
    path: "/dashboard",
    name:"Dashboard",
    Component: (props) => userIs(["vendor"])?
      <Dashboard {...props} />
      :
      <Redirect to={{ pathname: "/login/vendor", state: { from: props.location } }} />
  },
  /**
   * @description Customers Route Directories.
   */
  { 
    path: "/categories",
    name: "Categories",
    Component: (props) => <Category {...props} />
  },
  { 
    path: "/category/:category",
    name: "CategoryProducts",
    Component: (props) => <CategoryProductList {...props} />
  },
  { 
    path: "/products/:products",
    name: "ProductList",
    Component: (props) => <ProductList {...props} />
  },
  { 
    path: "/products",
    name: "ProductList",
    Component: (props) => <ProductList {...props} />
  },
  { 
    path: "/product/:product",
    name: "Product",
    Component: (props) => <SingleProduct {...props} />
  },
  { 
    path: "/vendors",
    name: "Vendors",
    Component: (props) => <Vendor {...props} />
  },
  { 
    path: "/vendor/:vendor",
    name: "Vendor",
    Component: (props) => <VendorProductList {...props} />
  },
  {
    path: "/brands",
    name: "Brands",
    Component: (props) => <Brand {...props} />
  },
  { 
    path: "/brand/:brand",
    name: "Brand",
    Component: (props) => <BrandProductList {...props} />
  },
  { 
    path: "/blog/:blog",
    name: "Blog",
    Component: (props) => <SingleBlog {...props} />
  },
  { 
    path: "/contact",
    name: "Contact",
    Component: (props) => <Contact {...props} />
  },
  { 
    path: "/profile",
    name: "CustomerProfile",
    Component: (props) => userIs(["customer"])?
      <Profile {...props} />
      :
      <Redirect to={{ pathname: "/login/customer", state: { from: props.location } }} />
  },
  { 
    path: "/cart",
    name: "Cart",
    Component: (props) => <Cart {...props} />
  },
  {
    path: "/compare",
    name: "Compare",
    Component: (props) => <Compare {...props} />
  },
  { 
    path: "/blogs",
    name: "Blog",
    Component: (props) => <Blogs {...props} />
  },
  { 
    path: "/login/customer",
    exact: true,
    name: "CustomerLoginPage",
    Component: (props) => <Login {...props} />
  },
  { 
    path: "/login/vendor",
    exact: true,
    name: "VendorLoginPage",
    Component: (props) => <Login {...props} />
  },
  { 
    path: "/login/admin",
    exact: true,
    name: "AdminLoginPage",
    Component: (props) => <Login {...props} />
  },
  { 
    path: "/about",
    name: "About",
    Component: (props) => <About {...props} />
  },
  { 
    path: "/",
    exact: true,
    name: "Home",
    Component: (props) => <Home {...props} />
  },
  { 
    path: "*",
    name: "Page404",
    Component: (props) => <Page404 {...props} />
  },
];

export default indexRoutes;
