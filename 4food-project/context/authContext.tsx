"use client";

import { ReactNode, createContext, useState } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
}

interface authContextType {
  user: User;
  signIn: (data: any) => void;
  signUp: (data: any) => void;
  setUser: (data: any) => void;
  userIsLogged: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as authContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  function signUp(data: any) {
    try {
      fetch("https://back4food-92b6dhpjn-lorenzocoracini.vercel.app/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            throw new Error("Cadastro não foi realizado.");
          }
        })
        .then((data) => {
          if (data) {
            alert("Seu cadastro foi feito com sucesso!");
          }
        });
    } catch (error) {
      alert(error);
    }
  }

  function signIn(data: any) {
    try {
      fetch("https://back4food-92b6dhpjn-lorenzocoracini.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          alert("Você entrou com sucesso");

          setUser(data.user);
          localStorage.setItem("jwtToken", data.token);
          localStorage.setItem("userProfile", JSON.stringify(data.user));
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function userIsLogged() {
    checkTokenValidity();
  }

  const checkTokenValidity = () => {
    const token = localStorage.getItem("jwtToken");
    console.log(token);

    if (token) {
      fetch("https://back4food-92b6dhpjn-lorenzocoracini.vercel.app/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => setUser(data))
        .catch((error) => {
          localStorage.removeItem("jwtToken");
        });
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, signUp, setUser, userIsLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
}
