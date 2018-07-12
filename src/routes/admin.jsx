//@desc These are the sidebar items/routes on the admin page
//@author Sylvia Onwukwe
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Store from "@material-ui/icons/Store";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Layers from "@material-ui/icons/Layers";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Search from "@material-ui/icons/Search";
import Loyalty from "@material-ui/icons/Loyalty"
import Language from "@material-ui/icons/Language"
import Settings from "@material-ui/icons/Settings"
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
import Email from "@material-ui/icons/Email"
// core components/admin
import Admin from "../Admin/Dashboard/dashboard.jsx";
import AdminProfile from "../Admin/AdminProfile/adminProfile.jsx";
import AdminOrder from "../Admin/Orders/orders.jsx";
import AdminProducts from "../Admin/Products/products.jsx";
import AdminProductCategory from "../Admin/ProductCategory/mainPage.jsx";
import Vendors from "../Admin/Vendors/vendors.jsx";
//import Languages from "../Admin/Language/languages.jsx";
import AdminStore from "../Admin/StoreSetting/mainPage.jsx";
import AdminCustomers from "../Admin/Customers/customers.jsx";
import AdminMessage from "../Admin/Messages/messages.jsx";
import AdminBrands from "../Admin/ProductBrands/brands.jsx";
import AdminSeo from "../Admin/SEO/seo.jsx"
import discountCoupon from "../Admin/DiscountCoupon/discountCoupon";
import AdminBlog from "../Admin/Blog/mainPage";
//import EmailTemplate from "../Admin/EmailTemplates/emailTemplates.jsx";

const adminRoutes = [
  {
    path: "/admin",
    sidebarName: "Dashboard",
    navbarName: "Admin Dashboard",
    exact: true,
    icon: Dashboard,
    component: Admin
  },
  {
    path: "/admin/messages",
    sidebarName: "Messages",
    navbarName: "Messages",
    icon: Email,
    component: AdminMessage
  },
  {
    path: "/admin/products",
    sidebarName: "Products",
    navbarName: "Products",
    icon: Store,
    component: AdminProducts
  },
  {
    path: "/admin/orders",
    sidebarName: "Orders",
    navbarName: "Orders",
    icon: ShoppingCart,
    component: AdminOrder
  },
  {
    path: "/admin/vendors",
    sidebarName: "Vendors",
    navbarName: "Vendors",
    icon: SupervisorAccount,
    component: Vendors
  },
  {
    path: "/admin/customers",
    sidebarName: "Customers",
    navbarName: "Customers",
    icon: SupervisorAccount,
    component: AdminCustomers
  },
  {
    path: "/admin/categories",
    sidebarName: "Product Category",
    navbarName: "Categories",
    icon: Layers,
    component: AdminProductCategory
  },
  {
    path: "/admin/brands",
    sidebarName: "Product Brands",
    navbarName: "brands",
    icon: LocalOffer,
    component: AdminBrands
  },
  {
    path: "/admin/seo",
    sidebarName: "SEO",
    navbarName: "SEO",
    icon: Search,
    component: AdminSeo
  },
  {
    path: "/admin/coupons",
    sidebarName: "Discount Coupons",
    navbarName: "Coupons",
    icon: Loyalty,
    component: discountCoupon
  },
  {
    path: "/admin/blog",
    sidebarName: "Blog",
    navbarName: "Blog",
    icon: Language,
    component: AdminBlog
  },
  {
    path: "/admin/profile",
    sidebarName: "Admin Profile",
    navbarName: "AdmilProfile",
    icon: Person,
    component: AdminProfile
  },
  {
    path: "/admin/settings",
    sidebarName: "Store Settings",
    navbarName: "Store Settings",
    icon: Settings,
    component: AdminStore
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default adminRoutes;
