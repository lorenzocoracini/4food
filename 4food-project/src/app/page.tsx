"use client";
import "./globals.css";

import React, { useEffect } from "react";

import { PhotoSection } from "./components/PhotosSection";
import { ComeAndVisitUs } from "./components/ComeAndVisitUs";
import { IntroductionSection } from "./components/IntroductionSection";
import { PhilosophySection } from "./components/PhilosophySection";

async function Login() {
  try {
    fetch("https://back4food-e6nkh4wty-lorenzocoracini.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "pedro.rocha2609@gmail.com",
        password: "123",
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        fetch(
          "https://back4food-e6nkh4wty-lorenzocoracini.vercel.app/profile",
          {
            method: "GET",
            headers: {
              Authentication: `Bearer ${data.token}`,
            },
          }
        )
          .then((data) => data.json())
          .then((data) => console.log(data, "profile"));
      });
  } catch (error) {
    console.log(error);
  }
}

export function Home() {

  const checkTokenValidity = () => {
    const token = localStorage.getItem('jwtToken');
  
    if (token) {
      fetch('https://back4food-e6nkh4wty-lorenzocoracini.vercel.app/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Token is valid, user is logged in
        // You can set some state or dispatch an action to indicate the user is logged in
      })
      .catch((error) => {
        localStorage.removeItem('jwtToken');
      });
    } else {
      // Token is not available, user is not logged in
      // You can set some state or dispatch an action to indicate the user is not logged in
    }
  };


  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <main className="px-4 xl:px-0">
      <IntroductionSection />
      <PhotoSection />
      <PhilosophySection />
      <ComeAndVisitUs />
    </main>
  );
}

export default Home;
