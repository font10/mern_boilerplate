import yup from 'yup'

const userSchema = yup.object({
  name: yup.string().min(6).required(),
  age: yup.number().integer().positive().min(18).required(),
  email: yup.string().email().required(),
})

export default userSchema