import { useDispatch } from 'react-redux';
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../../../../components/index"
import { inputsCreatePala } from "../../../../utils/constants"
import { useForm } from "react-hook-form";
import { palaSchema } from "../../../../validations/Palas/palasYupValidation";
import { useSelector } from "react-redux";
import { addPala } from "../../../../redux/thunks/palasThunks";
import { changeStatus } from '../../../../redux/slices/palasSlice';
import { toFalse } from '../../../../redux/slices/modalSlice';
import { getToast } from '../../../../utils/function';

export const CreatePala = () => {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(palaSchema),
  });

  const onSubmit = async(newPala) => {
    try {
      const res = await dispatch(addPala({newPala, token}))
      if(res.meta.requestStatus === 'fulfilled') {
        getToast('success', 'Created succesfully', 'top-center')
      }
    } catch (error) {
      getToast('error', error.message, 'top-center')
    } finally {
      dispatch(changeStatus('idle'))
      dispatch(toFalse())
    }
  };

  return (
    <section className="w-72">
      <header className="text-xl font-medium">Add new pala</header>
      <section>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col px-7 py-5">
          <fieldset className="w-full">
            {
              inputsCreatePala.map(input => (
                <InputField
                  key={input.id}
                  id={input.id}
                  label={input.label}
                  name={input.name}
                  placeholder={input.placeholder}
                  type={input.type}
                  error={errors[input.name]?.message}
                  register ={register}
                />
              ))
            }       
            <button className="mt-3 w-full py-2 rounded-md font-medium bg-blue-300">Enviar</button>
          </fieldset>
        </form>
      </section>
    </section>
  )
}
