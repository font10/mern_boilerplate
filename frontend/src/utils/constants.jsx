import { route } from "../models/route.model";

const menusNav = [
  { id: 1, name: 'Home', path: route.root.path },
  { id: 2, name: 'Login', path: route.auth.login.path },
  { id: 3, name: 'Sign up', path: route.auth.signup.path },
]

const inputsSignUp = [
  { id: 1, label: "Name", type: "text", name: "name", placeholder: "Name..." }, 
  { id: 2, label: "Email", type: "email", name: "email", placeholder: "Email..." },
  { id: 3, label: "Password", type: "password", name: "password", placeholder: "Password..." },
  { id: 4, label: "Confirm Password", type: "password", name: "confirmPassword", placeholder: "Confirm Password..." },
]

const inputsLogin = [
  { id: 1, label: "Email", type: "email", name: "email", placeholder: "Email..." },
  { id: 2, label: "Password", type: "password", name: "password", placeholder: "Password..." },
]

export {
  menusNav,
  inputsLogin,
  inputsSignUp
}
