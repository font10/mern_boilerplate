import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { addPalaService, getPalasService } from '../../services/auth.api'

export const Home = () => {
  const { user, token } = useSelector(state => state.auth)
  const [palas, setPalas] = useState([])

  const getPalas = async() => {
    getPalasService()
    .then(res => { console.log(res);  setPalas(res)})
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getPalas()
    // eslint-disable-next-line
  }, [])

  const handleSubmit = async() => {
    const data = {      
      marca: "Head",
      modelo: "Delta Pro",
      forma: "Diamante",
      tacto: "Duro",
    }

    const res = await addPalaService(data, token)
    console.log(res)

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
            palas?.map(pala => (
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

/*
{ loading && <p>Loading...</p>  }
        { !palas && error && <p>{error}</p> }
        <div>
        {
            palas?.map(pala => (
              <div key={pala?._id} className='border border-gray-200 w-48 my-2 rounded-md p-5'>
                <p><span className='font-medium'>Marca: </span>{pala?.marca}</p>
                <p><span className='font-medium'>Modelo: </span>{pala?.modelo}</p>
                <p><span className='font-medium'>Forma: </span>{pala?.forma}</p>
                <p><span className='font-medium'>Tacto: </span>{pala?.tacto}</p>
              </div>
            ))
          }
        </div>
*/