
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

const inputsCreatePala = [
  { id: 1, label: "Marca", type: "text", name: "marca", placeholder: "Black Crown" }, 
  { id: 2, label: "Modelo", type: "text", name: "modelo", placeholder: "Nakano 3k" },
  { id: 3, label: "Forma", type: "text", name: "forma", placeholder: "Redonda" },
  { id: 4, label: "Tacto", type: "text", name: "tacto", placeholder: "Medio or Medio-Duro" },
]

export {
  inputsCreatePala,
  inputsLogin,
  inputsSignUp
}
