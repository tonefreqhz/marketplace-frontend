//@desc The main router of the application
//@author Muhammed Odunayo
//@co author Sylvia Onwukwe
//@co author Ifeoluwa Odewale
import Home from "../containers/Home";
import Admin from "../Admin/LandingPage/layout.jsx";
import AdminProductCategory from "../Admin/LandingPage/layout.jsx";
import DiscountCoupon from "../Admin/LandingPage/layout.jsx";
import AdminCustomers from "../Admin/LandingPage/layout.jsx";
import AdminMessages from "../Admin/LandingPage/layout.jsx";
import AdminProduct from "../Admin/LandingPage/layout.jsx";
import AdminVendors from "../Admin/LandingPage/layout.jsx";
import AdminProfile from "../Admin/LandingPage/layout.jsx";
import AdminBrands from "../Admin/LandingPage/layout.jsx";
import AdminOrder from "../Admin/LandingPage/layout.jsx";
import AdminStore from "../Admin/LandingPage/layout.jsx";
import AdminBlog from "../Admin/LandingPage/layout.jsx";
import AdminSeo from "../Admin/LandingPage/layout.jsx";
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
  { path: "/dashboard/user", name: "Users", component: UserProfile},
  { path: "/dashboard", name:"Dashboard", component: Dashboard},
  
// Admin Dsahboard
  { path: "/admin/categories", name: "AdminProductCategory", component: AdminProductCategory},
  { path: "/admin/customers", name: "Customers", component: AdminCustomers},
  { path: "/admin/messages", name:"AdminMessages", component: AdminMessages},
  { path: "/admin/settings", name: "AdminStore", component: AdminStore},
  { path: "/admin/products", name: "AdminProducts", component: AdminProduct},
  { path: "/admin/vendors", name: "AdminVendors", component: AdminVendors},
  { path: "/admin/profile", name: "AdminProfile", component: AdminProfile},
  { path: "/admin/coupons", name: "DiscountCoupons", component: DiscountCoupon},
  { path: "/admin/orders", name: "AdminOrder", component:AdminOrder},
  { path: "/admin/brands", name: "AdminBrands", component: AdminBrands},
  { path: "/admin/blog", name: "AdminBlog", component: AdminBlog},
  { path: "/admin/seo", name: "AdminSeo", component: AdminSeo},
  { path: "/admin", name: "Admin Dashboard", component: Admin},
  { path: "/user", name: "Users", component: UserProfile},
// End of Admin Dsahboard 
  { path: "/app", name: "App", component: App },
  { path: "/", name: "Components", component: Home }
];

export default indexRoutes;
