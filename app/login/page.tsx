"use client";
import { FormEvent, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Link from "next/link";
import classNames from "classnames";
import { Spinner } from "../components/spinner/spinner.component";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="bg-slate-500 py-10 px-5 rounded-xl w-full max-w-[550px]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className={classNames("font-semibold text-base text-slate-200", {
                "text-red-400": error.includes("Email"),
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
            {isLoading ? <Spinner className="after:w-5 after:h-5" /> : "Login"}
          </button>
          <p>
            Don&apos;t have an Account?{" "}
            <Link className="text-blue-300" href="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
