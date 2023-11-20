import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export const MenuNavItem = ({ menu }) => {
  return (
    <li>
      <Link key={menu.id} to={menu.path} className="font-medium text-gray-200 hover:text-cyan-200">{menu.name}</Link>
    </li>
  )
}

MenuNavItem.propTypes = {
  menu: PropTypes.object.isRequired,
};