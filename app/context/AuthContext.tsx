"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { User } from "../helpers/types";
type UserState = { user: User | null };
type UserAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };
export const authReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      localStorage.removeItem("user");
      return { user: null };
    default:
      return state;
  }
};
type UserContextType = {
  state: UserState;
  dispatch: Dispatch<UserAction>;
};
export const AuthContext = createContext<UserContextType | undefined>(
  undefined
);

const getUserFromStorage = (): User | null => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? (JSON.parse(storedUser) as User) : null;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return null;
  }
};

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  useEffect(() => {
    const user = getUserFromStorage();
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  //remove me
  console.log("AuthContext state", state);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthStore must be within a AuthContextProvider");
  }
  return context;
};
