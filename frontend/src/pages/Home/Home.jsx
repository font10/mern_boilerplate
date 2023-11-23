import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Home = () => {
  const { user, token } = useSelector(state => state.auth)

  return (
    <article>
      <h2>Home</h2>
      <p className="flex flex-col text-xl font-medium mb-5">
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?._id}</p>
        <p className="text-sm">{token && token}</p>
      </p>
      <Link to='/dashboard' className="px-6 py-2 rounded-md bg-blue-200 font-medium">Dashboard</Link>
    </article>
  )
}
