import { useSelector } from "react-redux"
import { addPalaService } from '../../services/palas.api'
import { useGetPalasQuery } from "../../hooks/useGetPalasQuery"

export const Home = () => {
  const { user, token } = useSelector(state => state.auth)
  const { palas, error, loading, fetchData } = useGetPalasQuery({
    method: 'get',
    url: '/palas'
  })

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  const handleSubmit = async() => {
    const data = {      
      marca: "Head",
      modelo: "Delta Pro",
      forma: "Diamante",
      tacto: "Duro",
    }

    await addPalaService(data, token)
    await fetchData()
  }

  return (
    <article>
      <h2>Home</h2>
      <p className="text-xl font-medium">
        {user?.name}
      </p>
      <div className="mt-10">
        <div>
          {
            palas?.data?.map(pala => (
              <div key={pala?._id} className='border border-gray-200 w-48 my-2 rounded-md p-5'>
                <p><span className='font-medium'>Marca: </span>{pala?.marca}</p>
                <p><span className='font-medium'>Modelo: </span>{pala?.modelo}</p>
                <p><span className='font-medium'>Forma: </span>{pala?.forma}</p>
                <p><span className='font-medium'>Tacto: </span>{pala?.tacto}</p>
              </div>
            ))
          }
        </div>
        <button onClick={handleSubmit} className=" px-6 py-2 bg-blue-200 rounded-md">Get user name</button>
      </div> 
    </article>
  )
}
