import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import profile from "../../../assets/images/profile.png"
import { logout } from "../../../redux/slices/authSlice";

export const Panel = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  return (
    <section className="flex flex-col items-center w-full h-96 bg-blue-100 rounded-md bg-opacity-60 p-8">
      <article className="flex flex-col items-center my-5">
        <figure>
          <img src={profile} alt="" width={120} />
        </figure>
        <h2 className="text-xl font-medium text-gray-800 mt-4">{user?.name}</h2>
        <p className="text-sm font-medium text-gray-600">{user?.email}</p>
      </article>
      <div className="flex flex-row gap-2 items-center">
        <Link to='/dashboard' className="px-6 py-2 rounded-md bg-blue-200 font-medium">Dashboard</Link>
        <button className="px-6 py-2 rounded-md bg-red-200 font-medium" onClick={() => dispatch(logout())} >Logout</button>
      </div>
    </section>
  )
}
