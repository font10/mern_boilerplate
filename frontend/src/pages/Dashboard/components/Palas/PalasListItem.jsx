import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import { MdEdit, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toTrue } from "../../../../redux/slices/modalSlice";
import { changeId, changeStatus } from "../../../../redux/slices/palasSlice";
import { deletePala } from "../../../../redux/thunks/palasThunks";
import { getToast } from "../../../../utils/function";

export const PalasListItem = ({pala}) => {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)

  const handleDelete = async(id) => {
    try {
      const res = await dispatch(deletePala({id, token}))
      if(res.meta.requestStatus === 'fulfilled') {
        getToast('success', 'Deleted succesfully', 'top-center')
      }
    } catch (error) {
      getToast('error', error.message, 'top-center')
    } finally {
      dispatch(changeStatus('idle'))
    }
  }

  return (
    <article key={pala?._id} className='flex flex-row justify-between border border-gray-200 my-2 rounded-md p-5'>
      <section>
        <p><span className='font-medium'>Marca: </span>{pala?.marca}</p>
        <p><span className='font-medium'>Modelo: </span>{pala?.modelo}</p>
        <p><span className='font-medium'>Forma: </span>{pala?.forma}</p>
        <p><span className='font-medium'>Tacto: </span>{pala?.tacto}</p>
      </section>
      <section className="flex flex-wrap gap-3">
        <MdEdit 
          size={32}
          className="bg-green-200 hover:bg-green-100 p-1.5 text-green-500 rounded-md cursor-pointer" 
          onClick={() => {dispatch(changeId(pala?._id)); dispatch(toTrue()) } } 
        />
        <MdDelete 
          size={32} 
          className="bg-red-200 hover:bg-red-100 p-1.5 text-red-500 rounded-md cursor-pointer" 
          onClick={() => handleDelete(pala?._id)}
        />
      </section>
    </article>
  )
}

PalasListItem.propTypes = {
  pala: PropTypes.object.isRequired,
};
