import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useAuthContext();
  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError("");
    const response = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
      toast.error(data.error);
    }
    if (response.ok) {
      setIsLoading(false);
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
      toast.success("Success");
    }
  };

  if (state.user) {
    redirect("/");
  }
  return { error, isLoading, signup };
};
