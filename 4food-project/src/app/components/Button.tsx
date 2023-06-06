import { type } from "os";
import React from "react";

type Props = {
    children: string | JSX.Element
}

export function Button({ children }:Props) {
    return (
        <button className='bg-black text-white px-14 py-4 hover:opacity-60 hover:-translate-y-1 
        duration-300 text-xl'>{children}</button>
    );
  }