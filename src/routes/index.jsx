import Home from "../containers/Home";
import LoginPage from "../containers/LoginPage.jsx";
import App from '../containers/App';

var indexRoutes = [
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/app", name: "App", component: App },
  { path: "/", name: "Components", component: Home }
];

export default indexRoutes;
