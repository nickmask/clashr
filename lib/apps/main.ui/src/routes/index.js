import Account from "./Account";
import AccountProfile from "./AccountProfile";
import AccountSettings from "./AccountSettings";
import Auth from "./Auth";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";
import AuthResetPassword from "./AuthResetPassword";
import AuthVerification from "./AuthVerification";
import Dashboard from "./Dashboard";
import Data from "./Data";
import ErrNotFound from "./ErrNotFound";
import Landing from "./Landing";

export const DFLT_PUBLIC_PATH = "/";

export const DFLT_PRIVATE_PATH = "/dashboard";

export const DFLT_AUTH_PATH = "/auth/login";

export const routes = [
  // [PUBLIC] Landing Page
  {
    path: DFLT_PUBLIC_PATH,
    exact: true,
    guarded: false,
    component: Landing
  },
  // [PUBLIC] Authentication-related
  {
    path: "/auth",
    guarded: false,
    component: Auth,
    routes: [
      {
        path: DFLT_AUTH_PATH,
        exact: false,
        guarded: false,
        component: AuthLogin
      },
      {
        path: "/auth/register",
        guarded: false,
        component: AuthRegister
      },
      {
        path: "/auth/reset-password",
        guarded: false,
        component: AuthResetPassword
      },
      {
        path: "/auth/verification/:ctx(email|mfa)",
        guarded: false,
        component: AuthVerification
      }
    ]
  },
  // [PRIVATE] User's Dashboard
  {
    path: DFLT_PRIVATE_PATH,
    guarded: true,
    component: Dashboard,
    nav: { label: "Dashboard", icon: undefined, header: true }
  },
  // [PRIVATE] User's Data
  {
    path: "/data",
    guarded: true,
    component: Data,
    nav: { label: "Data", icon: undefined, header: true }
  },
  // [PRIVATE] User's Account
  {
    path: "/account",
    guarded: true,
    component: Account,
    nav: { label: "Account", icon: undefined, header: true },
    routes: [
      {
        path: "/account/profile",
        guarded: true,
        component: AccountProfile
      },
      {
        path: "/account/settings",
        guarded: true,
        component: AccountSettings
      }
    ]
  },
  // [PUBLIC] 404 Page
  {
    guarded: false,
    component: ErrNotFound
  }
];

export default routes;
