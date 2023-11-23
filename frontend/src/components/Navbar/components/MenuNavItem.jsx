import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/slices/authSlice";

export const MenuNavItem = ({ menu }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);

  if(!user) console.log('no auth')

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <li>
      <Link
        key={menu.id}
        to={menu.path}
        className={`${
          menu.id === 1 ? 'hidden' : 'block'
        } font-medium text-gray-200 hover:text-cyan-200`}
        onClick={ menu.name === 'Logout' && handleLogout }
      >
        {menu.name}
      </Link>
    </li>
  );
};

MenuNavItem.propTypes = {
  menu: PropTypes.object.isRequired,
};
