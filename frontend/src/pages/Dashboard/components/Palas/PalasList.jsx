import { PalasListItem } from "./PalasListItem"
import { MdAdd } from 'react-icons/md'
import Modal from "../../../../components/Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchPalas } from "../../../../redux/thunks/palasThunks"
import { toTrue } from "../../../../redux/slices/modalSlice"
import { CreatePala } from "../../components/Create/CreatePala"
import { Edit } from "../../Edit/Edit"
import { changeId } from "../../../../redux/slices/palasSlice"

export const PalasList = () => {
  const dispatch = useDispatch()
  const { palas, status, error, id } = useSelector(state => state.palas)
  
  useEffect(() => {
    if(status === 'idle') dispatch(fetchPalas())
  },[status, dispatch])

  if(status === 'loading') {
    return <div className='w-full h-screen flex items-center justify-center text-xl font-medium'>Loading...</div>
  }

  if(status === 'failed') {
    return <div className='w-full h-screen flex items-center justify-center text-xl font-medium'>{error}</div>
  }

  return (
    <section>
      <header className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold">Palas</h1>
        <button 
          className="flex flex-row items-center bg-green-200 hover:bg-green-100 p-2 rounded-md"
          onClick={() => { dispatch(changeId('')); dispatch(toTrue()) } }        
        >
          <MdAdd size={24} className="text-green-500" />
          <label className="text-lg font-medium px-2 text-green-700 cursor-pointer">Add pala</label>
        </button>
      </header>
      <div>
        <Modal>
          { id.length < 1
            ? <CreatePala />  
            : <Edit />
          }
        </Modal>
      </div>
      <section className="mt-5">
        {
          palas?.map(pala => (
            <PalasListItem key={pala?._id}  pala={pala || {}} />
          ))
        }
      </section>
    </section>
  )
}
