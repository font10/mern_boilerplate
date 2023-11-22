import { useSelector } from "react-redux"
import useAxiosFunction from "../../hooks/useAxiosFunc"
import axios from '../../api/jsonPH'

export const HomeItem = () => {  
  const { token } = useSelector(state => state.auth)
  const [ axiosFetch] = useAxiosFunction()

  const handleSubmit = async() => {
    /*const res = await axios.post('http://localhost:5000/api/v1/users', data, { headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }})*/
    const data = {      
      marca: "Head",
      modelo: "Delta Pro",
      forma: "Diamante",
      tacto: "Duro",
    }

    //await addPalaService(data, token)

    axiosFetch({
      axiosInstance: axios,
      method: 'post',
      url: '/palas',
      body: data,           
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      
      
    })
  }

  return (
    <div>
    <button onClick={handleSubmit} className=" px-6 py-2 bg-blue-200 rounded-md">Get user name</button>
    </div>
  )
}
