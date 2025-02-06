"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { Product, ProductResponse } from "../helpers/types";
type StoreState = { products: Product[] };
type StoreAction =
  | { type: "SET_PRODUCTS"; payload: ProductResponse }
  | { type: "SET_PRODUCT"; payload: Product }
  | { type: "SET_CART"; payload: Product }
  | { type: "REMOVE_PRODUCT"; payload: Product };

export const storeReducer = (state: StoreState, action: StoreAction) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { products: action.payload.products };
    default:
      return state;
  }
};
type StoreContextType = {
  state: StoreState;
  dispatch: Dispatch<StoreAction>;
};
export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(storeReducer, {
    products: [],
  });
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be within a StoreProvider");
  }
  return context;
};
