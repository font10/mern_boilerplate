import { InputField } from "../../../../components/Input/InputField";
import { inputsLogin } from "../../../../utils/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginService } from "../../../../services/auth.api";
import { createAdapterLogin } from "../adapters/createAdapterLogin";
import { loginSchema } from "../../../../validations/Auth/authYupValidation";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../models/route.model";

export const FormLogin = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async(data) => {
    const res = await sendRequest(data)
    console.log(res)
    navigate(route.root.path)
  };

  const sendRequest = async (data) => {
    const user = createAdapterLogin(data)
    const res = await loginService(user)
    
    return res
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col px-7 py-5">
      <fieldset className="w-full">
        <legend className="mx-auto font-semibold text-cyan-700 text-3xl">Login</legend>
          {
            inputsLogin.map(input => (
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

