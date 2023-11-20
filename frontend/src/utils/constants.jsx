import { route } from "../models/route.model";

export const menusNav = [
  { id: 1, name: 'Home', path: route.root.path },
  { id: 2, name: 'Login', path: route.auth.login.path },
  { id: 3, name: 'Sign up', path: route.auth.signup.path },
]