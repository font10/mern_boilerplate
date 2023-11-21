import Yup from 'yup'

const palaSchema = Yup.object({
  marca: Yup.string().trim().required(),
  modelo: Yup.string().trim().required(),
  forma: Yup.string().trim().required(),
  tacto: Yup.string().trim().required()
})

export default palaSchema