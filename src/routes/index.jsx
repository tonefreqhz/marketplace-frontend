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
import Blog from "../layouts/Dashboard/Dashboard.jsx";

//Admin Router
import Admin from "../Admin/LandingPage/layout.jsx";
import AdminProductCategory from "../Admin/LandingPage/layout.jsx";
import DiscountCoupon from "../Admin/LandingPage/layout.jsx";
import AdminCustomers from "../Admin/LandingPage/layout.jsx";
import AdminMessages from "../Admin/LandingPage/layout.jsx";
import EmailTemplate from "../Admin/LandingPage/layout.jsx";
import AdminProduct from "../Admin/LandingPage/layout.jsx";
import AdminVendors from "../Admin/LandingPage/layout.jsx";
import AdminProfile from "../Admin/LandingPage/layout.jsx";
import AdminBrands from "../Admin/LandingPage/layout.jsx";
import AdminOrder from "../Admin/LandingPage/layout.jsx";
import AdminStore from "../Admin/LandingPage/layout.jsx";
import AdminBlog from "../Admin/LandingPage/layout.jsx";
import AdminSeo from "../Admin/LandingPage/layout.jsx";
import Currency from "../Admin/LandingPage/layout.jsx";
import Language from "../Admin/LandingPage/layout.jsx";

//User Router
import Home from "../containers/Home.jsx";
import Cart from "../containers/Cart.jsx";
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

var indexRoutes = [
  { path: "/dashboard/messages", name: "Messages", component: Messages},
  { path: "/dashboard/products/category", name: "Product Category", component: Products},
  { path: "/dashboard/products/brand", name: "Product Brand", component: Products},
  { path: "/dashboard/products", name: "Products", component: Products},
  { path: "/dashboard/settings", name: "Settings", component: Shop},
  { path: "/dashboard/coupons", name: "Coupons", component: Coupons},
  { path: "/dashboard/support", name: "Support", component: Support},
  { path: "/dashboard/banner", name: "banners", component: Banner},
  { path: "/dashboard/orders", name: "Orders", component: Orders},
  { path: "/dashboard/blog", name: "Blog", component: Blog},
  { path: "/dashboard/user", name: "Users", component: UserProfile},
  { path: "/dashboard", name:"Dashboard", component: Dashboard},

  { path: "/admin/categories", name: "AdminProductCategory", component: AdminProductCategory},
  { path: "/admin/templates", name: "EmailTemplate", component: EmailTemplate},
  { path: "/admin/customers", name: "Customers", component: AdminCustomers},
  { path: "/admin/messages", name:"AdminMessages", component: AdminMessages},
  { path: "/admin/language", name: "Language", component: Language},
  { path: "/admin/settings", name: "AdminStore", component: AdminStore},
  { path: "/admin/products", name: "AdminProducts", component: AdminProduct},
  { path: "/admin/currency", name: "Currency", component: Currency},
  { path: "/admin/vendors", name: "AdminVendors", component: AdminVendors},
  { path: "/admin/profile", name: "AdminProfile", component: AdminProfile},
  { path: "/admin/coupons", name: "DiscountCoupons", component: DiscountCoupon},
  { path: "/admin/orders", name: "AdminOrder", component:AdminOrder},
  { path: "/admin/brands", name: "AdminBrands", component: AdminBrands},
  { path: "/admin/blog", name: "AdminBlog", component: AdminBlog},
  { path: "/admin/seo", name: "AdminSeo", component: AdminSeo},
  { path: "/admin", name: "Dashboard", component: Admin},

  { path: "/categories", name: "Categories", component: Category },
  { path: "/category/:category", name: "CategoryProducts", component: CategoryProductList },
  { path: "/products/:products", name: "ProductList", component: ProductList },
  { path: "/products", name: "ProductList", component: ProductList },
  { path: "/product/:product", name: "Product", component: SingleProduct },
  { path: "/vendors", name: "Vendors", component: Vendor },
  { path: "/vendor/:vendor", name: "Vendor", component: VendorProductList },
  { path: "/brands", name: "Brands", component: Brand },
  { path: "/brand/:brand", name: "Brand", component: BrandProductList },
  { path: "/blog/:blog", name: "Blog", component: SingleBlog },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/blogs", name: "Blog", component: Blogs },
  { path: "/login", name: "LoginPage", component: Login},
  { path: "/about", name: "About", component: About },
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "*", name: "Page404", component: Page404 },
];

export default indexRoutes;
