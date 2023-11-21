import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios'

export const Home = () => {
  const [data, setData] = useState([])

  const fetch = async() => {    
    const res = await axios.get('http://localhost:5001/api/v1/users/user', {
      withCredentials: true
    }).catch(err => console.log(err))
    console.log(res)   
    return res
  }

  useEffect(() => {
    fetch().then(res => setData(res)).catch(err => console.log(err))
  }, [])

  console.log(data)

  return (
    <article>
      <h2>Home</h2>
      <div>
        User
      </div>      
    </article>
  )
}
