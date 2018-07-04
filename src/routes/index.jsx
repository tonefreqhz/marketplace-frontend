import Home from "../containers/Home";
import LandingPage from "../containers/LandingPage";
import ProfilePage from "../containers/ProfilePage";
import LoginPage from "../containers/LoginPage.jsx";
import App from '../containers/App';

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/app", name: "App", component: App },
  { path: "/", name: "Components", component: Home }
];

export default indexRoutes;
