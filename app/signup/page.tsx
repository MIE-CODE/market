"use client";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { auth, googleProvider } from "../config/firebase";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <div className="flex  ">
        <div className=" flex  items-center bg-gradient-to-br from-slate-300 to-slate-500 flex-col  shadow-2xl border-[10px]   border-teal-950 w-[800px] h-[800px] rounded-xl ">
          <div className="flex items-baseline justify-center   p-10">
            {" "}
            <p className=" text-3xl  text-gray-500">
              {" "}
              <span>Market</span> ||{" "}
              <span className=" text-xl font-extrabold  text-yellow-700">
                SignUp
              </span>
            </p>{" "}
          </div>
          <div className="flex-col ">
            <form className="flex  flex-col   gap-3">
              <label className="block mb-5 ">
                <span className="block text-sm font-medium text-slate-700">
                  Full Name
                </span>
                <input
                  type="text"
                  className=" outline-slate-600 pl-3 peer border rounded-md w-[600px] h-10"
                  placeholder="Enter Email..."
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Email Address
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className=" outline-slate-600 pl-3 peer border rounded-md w-[600px] h-10"
                  placeholder="Enter Email..."
                />
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Password...
                </span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="outline-slate-600 border pl-3 rounded-md w-[600px] h-10"
                  placeholder="enter password... "
                />
              </label>

              <button
                onClick={signUp}
                className="transition ease-in-out hover:transition-colors hover:ease-in-out hover:delay-150 delay-150 hover:-translate-y-1 ml-[200px] mt-5 bg-yellow-900 hover:bg-gradient-to-br hover:from-yellow-800 hover:to-yellow-600 w-[200px] h-10 rounded-lg"
              >
                SignUp
              </button>
              <div className=" flex font-bold">
                <p className="mt-10">
                  Already have an account?{" "}
                  <Link href={"/login"}>
                    <span className="text-yellow-900">Sign in</span>{" "}
                  </Link>{" "}
                </p>
              </div>
            </form>
            <div className="flex justify-center  items-center mt-[2.5rem]">
              <div className="w-1/2 h-[0.0625rem] bg-gray-600 "></div>
              <p className="mx-4 font-semibold text-gray-500">OR</p>
              <div className="w-1/2 h-[1px] bg-gray-600 "></div>
            </div>
            <div className=" grid mt-10  gap-5  ">
              <div
                onClick={signInWithGoogle}
                className="select-none flex hover:border-gray-500  justify-center rounded h-12 items-center border "
              >
                <p className="select-none  font-semibold flex justify-center items-center gap-4">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Continue With Google
                </p>
              </div>
              <div className="flex justify-center hover:border-gray-500 h-12 rounded items-center border">
                <p className=" font-semibold flex justify-center items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <linearGradient
                      id="Ld6sqrtcxMyckEl6xeDdMa"
                      x1="9.993"
                      x2="40.615"
                      y1="9.993"
                      y2="40.615"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#2aa4f4" />
                      <stop offset="1" stop-color="#007ad9" />
                    </linearGradient>
                    <path
                      fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    />
                    <path
                      fill="#fff"
                      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                    />
                  </svg>
                  Continue With FaceBook{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
