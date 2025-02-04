"use client";
import { FormEvent, useState } from "react";
import { useSignUp } from "../hooks/useSignup";
import Link from "next/link";
import classNames from "classnames";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signup, isLoading, error } = useSignUp();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center  px-2">
      <div className="bg-slate-500 py-10 px-5 rounded-xl w-full max-w-[550px]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-base text-slate-200">
              Name
            </label>
            <input
              className="bg-transparent outline-none border-b text-slate-100 border-slate-200"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className={classNames("font-semibold text-base text-slate-200", {
                "text-red-400": error.includes("Email"),
              })}
            >
              Email
            </label>
            <input
              className={classNames(
                "bg-transparent outline-none border-b text-slate-100 border-slate-200",
                { "border-red-400": error.includes("Email") }
              )}
              type="gmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className={classNames("font-semibold text-base text-slate-200", {
                "text-red-400": error.includes("Password"),
              })}
            >
              Password
            </label>
            <input
              className={classNames(
                "bg-transparent outline-none border-b text-slate-100 border-slate-200",
                { "border-red-400": error.includes("Password") }
              )}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-slate-700 rounded py-2 mt-6 text-slate-200 font-bold text-lg"
            disabled={isLoading}
          >
            Login
          </button>

          <p>
            Already have an Account?{" "}
            <Link className="text-blue-300" href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
