import { useDispatch, useSelector } from 'react-redux';
import { route } from '../../../models/route.model';
import { logout } from "../../../redux/slices/authSlice";
import { Link } from 'react-router-dom';

export const MenuNav = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <ul className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
      {
        !user 
        ? <Link
            to={route.auth.login.path}
            className={`font-medium text-gray-200 hover:text-cyan-200`}
          >
            Login
          </Link>
        : <Link
            to={route.root.path}
            className={`font-medium text-gray-200 hover:text-cyan-200`}
            onClick={handleLogout}
          >
            Logout
          </Link>
      }
    </ul>
  )
}
