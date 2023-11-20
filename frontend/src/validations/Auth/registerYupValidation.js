import * as Yup from 'yup'

const signUpSchema = Yup.object().shape({
  name: Yup.string().min(4).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
  .min(4)
  .max(20)
  .required('No password provided.') ,
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required()
})

export default signUpSchema