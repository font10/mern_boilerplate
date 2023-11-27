import { Link } from "react-router-dom";
import { route } from "../../../models/route.model";
import {
  cloudinary,
  express,
  jest,
  jwt,
  mongo,
  multer,
  node,
  react,
  react_hook_form,
  react_router_dom,
  react_testing_library,
  react_toastify,
  redux,
  supertest,
  yup
} from '../../../assets/icons/index'


export const Presentation = () => {
  return (
    <section className="flex flex-col items-center w-full h-96 bg-blue-100 rounded-md bg-opacity-60 p-8">
      <h2 className="text-3xl font-semibold">
        MERN Authentication and CRUD Operations
      </h2>
      <p className="flex flex-col items-center mt-3">
        <p className="text-md text-gray-900 font-medium">
          This is a boilerplate for MERN authentication and CRUD operations. It includes a login page, signup page, dashboard page and a home page
        </p>
        <section className="flex flex-row justify-between  items-center mt-8 w-8/12 text-[14px] font-medium text-gray-700">
          <article>
            <header>Backend</header>
            <section className="flex flex-row gap-2">
              <img src={node} width={25} alt="" />
              <img src={express} width={25} alt="" />
              <img src={mongo} width={25} alt="" />
              <img src={jwt} width={25} alt="" />
              <img src={yup} width={25} alt="" />
              <img src={multer} width={25} alt="" />
              <img src={cloudinary} width={25} alt="" />
              <img src={jest} width={25} alt="" />
              <img src={supertest} width={25} alt="" />
            </section>
          </article>

            <article>
              <header>Frontend</header>
              <section className="flex flex-row gap-2">
                <img src={react} width={25} alt="" />
                <img src={redux} width={25} alt="" />
                <img src={react_hook_form} width={25} alt="" />
                <img src={react_router_dom} width={25} alt="" />
                <img src={react_toastify} width={25} alt="" />
                <img src={yup} width={25} alt="" />
                <img src={jest} width={25} alt="" />
                <img src={react_testing_library} width={25} alt="" />
              </section>
            </article>
        </section>
      </p>
      <div className="flex flex-row gap-2 items-center mt-14">
        <Link
          to={route.auth.login.path}
          className="px-6 py-2 rounded-md bg-blue-200 font-medium"
        >
          Login
        </Link>
        <Link
          to={route.auth.signup.path}
          className="px-6 py-2 rounded-md bg-red-200 font-medium"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
};
