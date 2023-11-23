export const getPalasAdapter = (data) => {
  if (!data) return null

  const formattedPalas = data.map(pala => {
    return {
      id: pala?._id,
      marca: pala?.marca,
      modelo: pala?.modelo,  
      forma: pala?.forma,  
      tacto: pala?.tacto,  
    }
  
  })
  return formattedPalas
}