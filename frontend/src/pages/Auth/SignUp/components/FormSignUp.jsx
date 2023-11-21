import { InputField } from "../../../../components/Input/InputField";
import { inputsSignUp } from "../../../../utils/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAdapterSignUp } from "../adapters/createAdapterSignUp";
import { signUpService } from "../../../../services/auth.api";
import { signUpSchema } from "../../../../validations/Auth/authYupValidation";

export const FormSignUp = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async(data) => {
    const res = await sendRequest(data)
    console.log(res)
  };

  const sendRequest = async (data) => {
    const user = createAdapterSignUp(data)
    const res = await signUpService(user)
    
    return res
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col px-7 py-5">
      <fieldset className="w-full">
        <legend className="mx-auto font-semibold text-cyan-700 text-3xl">Sign Up</legend>

        {
          inputsSignUp.map(input => (
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
  );
};

