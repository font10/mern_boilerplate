import * as yup from 'yup'

const palaSchema = yup.object().shape({
  marca: yup
    .string()
    .matches(/^[A-Za-z0-9\s]+$/g, "Must be characters and numbers")
    .min(3)
    .trim()
    .required("Marca is required!!"),
  modelo: yup
    .string()    
    .matches(/^[A-Za-z0-9\s]+$/g, "Must be characters and numbers")
    .min(4)
    .trim()
    .required('Modelo is required!!'),
  forma: yup
    .string()
    .matches(/^[a-zA-Zà-ü]+$/, "Must be only characters")
    .min(4)
    .trim()
    .required('Forma is required!!'),
  tacto: yup
    .string()
    .matches(/^[a-zA-Z-]+$/, "Must be only characters")
    .min(4)
    .trim()
    .required('Tacto is required!!'),
})

export {
  palaSchema
}