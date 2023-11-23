import { useDispatch, useSelector } from 'react-redux';
import { inputsCreatePala } from '../../../utils/constants';
import { InputField } from '../../../components';
import { useForm } from 'react-hook-form';
import { palaSchema } from '../../../validations/Palas/palasYupValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { editPala } from '../../../redux/thunks/palasThunks';
import { toFalse } from '../../../redux/slices/modalSlice';
import { changeStatus } from '../../../redux/slices/palasSlice';
import { getToast } from '../../../utils/function';

export const Edit = () => {
  const { palas, id } = useSelector(state => state.palas)
  const dispatch = useDispatch()
  const pala = palas.find(pala => pala._id === id)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(palaSchema),
  });

  const onSubmit = async(updPala) => {
    try {
      const res = await dispatch(editPala({id, updPala}))
      if(res.meta.requestStatus === 'fulfilled') {
        getToast('success', 'Updated succesfully', 'top-center')
      }
    } catch (error) {
      getToast('error', error.message, 'top-center')
    } finally {
      dispatch(changeStatus('idle'))
      dispatch(toFalse())
    }
  }  

  return (
    <section className="w-72">
      <header className="text-xl font-medium">Edit pala</header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          {
            inputsCreatePala.map(input => (
              <InputField
                key={input.id}
                id={input.id}
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                defaultValue={pala[input.name]}
                error={errors[input.name]?.message}
                register ={register}
              />
            ))
          }   
          <button className="px-6 py-2 rounded-md bg-blue-400 mt-5 w-full font-medium text-white hover:bg-blue-300">Save</button>
        </fieldset>
      </form>
    </section>
  )
}
