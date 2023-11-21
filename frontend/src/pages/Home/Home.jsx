import axios from '../../api/jsonPH'
import useAxiosFunc from "../../hooks/useAxiosFunc"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export const Home = () => {
  const { user, token } = useSelector(state => state.auth)
  const [users, error, loading, axiosFetch] = useAxiosFunc()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'get',
      url: '/users',
    })
  }
  
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const handleSubmit = async() => {

    /*const res = await axios.post('http://localhost:5000/api/v1/users', data, { headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }})*/
    axiosFetch({
      axiosInstance: axios,
      method: 'post',
      url: '/users',
      requestConfig: {
        data: {
          name: "provaaa",
          password: "Prova123",
          email: "provaemail@mail.com"
        }
      }
    })
  }

  return (
    <article>
      <h2>Home</h2>
      <p className="text-xl font-medium">
        {user?.name}
      </p>
      <div className="mt-10">
        { loading && <p>Loading...</p>  }
        { !users && error && <p>{error}</p> }
        <div>
          {
            users?.data?.map(user => (
              <p key={user?._id}>{user?.name}</p>
            ))
          }
        </div>
        <button onClick={handleSubmit} className=" px-6 py-2 bg-blue-200 rounded-md">Get user name</button>
      </div>      
    </article>
  )
}

/*
import useAxios from "../../hooks/useAxios"
import axios from '../../api/auth'

export const Home = () => {

  const [users, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: '/users',
    requestConfig: {
      headers: {
        'Content-language': 'es'
      }
    }
  })
  

  
  return (
    <article>
      <h2>Home</h2>
      <div>
        { loading && <p>Loading...</p>  }
        { !users && error && <p>{error}</p> }
        <div>
          {
            users?.data?.map(user => (
              <p key={user?._id}>{user?.name}</p>
            ))
          }
        </div>
        <button onClick={refetch}>Get user name</button>
      </div>      
    </article>
  )
}
*/