import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { changeLocation } from "../../redux/slices/authSlice";

export const ProtectedRoute = ({ isAllowed, redirectTo }) => {
  const { token } = useSelector(state => state.auth)
  const location = useLocation();
  const dispatch = useDispatch()

  dispatch(changeLocation(location.pathname))

  if(!isAllowed) return <Navigate to={redirectTo} />

  return (
    token ? <Outlet /> : <Navigate to={redirectTo} replace state={{ from: location }} />
  ) 
}

ProtectedRoute.propTypes = {
  redirectTo: PropTypes.node.isRequired,
  isAllowed: PropTypes.any,
};

ProtectedRoute.defaultProps = {
  redirectTo: '/login'
};