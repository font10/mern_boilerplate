import { useState } from 'react';
//import useAxios from "../../hooks/useAxios"
import axios from '../../api/auth'
import { useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState([])
 /* const [joke, error, loading] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: '/',
    requestConfig: {}
  });*/

  const fetch = async() => {    
    const res = await axios.get('http://localhost:5000/api/v1/users').catch(err => console.log(err))
    console.log(res)
    return res.data
  }

  useEffect(() => {
    fetch().then(res => setData(res)).catch(err => console.log(err))
  }, [])
  
  

  return (
    <article>
      <h2>Home</h2>


      <div>
        {
          data?.data?.map(user => (
            <div key={user._id}>
              {user?.name}
            </div>
          ))
        }
      </div>


      
    </article>
  )
}
