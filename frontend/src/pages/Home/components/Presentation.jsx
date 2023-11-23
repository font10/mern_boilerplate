import { Link } from "react-router-dom";
import { route } from "../../../models/route.model";
import node from "../../../assets/icons/node.png";
import express from "../../../assets/icons/express.png";
import mongo from "../../../assets/icons/mongo.png";
import jwt from "../../../assets/icons/jwt.png";
import yup from "../../../assets/icons/yup.png";
import supertest from "../../../assets/icons/supertest.png";
import multer from "../../../assets/icons/multer.png";
import cloudinary from "../../../assets/icons/cloudinary.svg";


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
              <img src={node} width={30} alt="" />
              <img src={express} width={30} alt="" />
              <img src={mongo} width={30} alt="" />
              <img src={jwt} width={30} alt="" />
              <img src={yup} width={30} alt="" />
              <img src={supertest} width={30} alt="" />
              <img src={multer} width={30} alt="" />
              <img src={cloudinary} width={30} alt="" />
            </section>
          </article>

            <article>
              <header>Frontend</header>
              <section className="flex flex-row gap-2">
                <img src={node} width={30} alt="" />
                <img src={express} width={30} alt="" />
                <img src={mongo} width={30} alt="" />
                <img src={jwt} width={30} alt="" />
                <img src={yup} width={30} alt="" />
                <img src={supertest} width={30} alt="" />
                <img src={multer} width={30} alt="" />
                <img src={cloudinary} width={30} alt="" />
              </section>
            </article>
        </section>
        <li>
          Frontend uses React, Redux-Toolkit, Redux-Persist, React-router-dom,
          React-hook-form, React-toastify, React-icons, Yup, Tailwind CSS, Jest
          and React Testing Library
        </li>
      </p>
      <div className="flex flex-row gap-2 items-center mt-5">
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
