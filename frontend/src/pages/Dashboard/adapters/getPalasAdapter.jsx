export const getPalasAdapter = (data) => {
  if (!data) return null
  console.log(data)
  const formattedPalas = data.map(pala => {
    return {
      _id: pala?._id,
      marca: pala?.marca,
      modelo: pala?.modelo,  
      forma: pala?.forma,  
      tacto: pala?.tacto,  
    }
  })
  console.log(formattedPalas)
  return formattedPalas
}