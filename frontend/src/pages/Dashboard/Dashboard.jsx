import { PalasList } from "./components"

export const Dashboard = () => {

  /*const handleSubmit = async() => {
    const data = {      
      marca: "Head",
      modelo: "Delta Pro",
      forma: "Diamante",
      tacto: "Duro",
    }

    await addPalaService(data, token)
    await fetchData()
  }*/

  return (
    <article>
      <h2>Dashboard</h2>
      <div className="mt-10">
        <PalasList />
      </div> 
    </article>
  )
}
