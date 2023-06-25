import { ReactNode, useState } from "react";
import { createContext } from "vm";

interface authContextType {
  user: object;
  signIn: () => void;
  signUp: () => void;
  setUser: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as authContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({});

  function signIn(data: any) {
    try {
      fetch("https://back4food-92b6dhpjn-lorenzocoracini.vercel.app/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((data) => data.json())
        .then((data) => setUser(data.user));
    } catch (error) {
      console.log(error);
    }
    localStorage.setItem("jwtToken", data.token);
  }

  function signUp() {

  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}
