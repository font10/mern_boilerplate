import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { toFalse } from "../../redux/slices/modalSlice";

const Modal = ({ children }) => {
  const dispatch = useDispatch()
  const { showModal } = useSelector(state => state.modal)

  if (!showModal) return null;

  return (
    <section className={`absolute top-1/4 left-[40%] mx-auto rounded-lg px-7 py-5 z-20 bg-gray-100 shadow-xl`}>
      <AiOutlineCloseCircle size={20} className="absolute right-8 cursor-pointer" onClick={() => dispatch(toFalse())} />
      {children}
    </section>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
