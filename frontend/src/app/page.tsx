"use client";

import ImageSlider from "./components/carousel";
import Live from "./components/live";
import Category from "./components/category";
import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";
import Individual from "./components/individual";
import Navbar from "./components/common-components/navbar";
import { VortexDemo } from "./components/ui/final_vortex";

export default function Home() {
  const { login, logout, user, ready } = usePrivy();
  const [display, setDisplay] = useState(false);
  const categories = ["Gaming", "Sports", "Politics", "Movies", "Casual"];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        user={user}
        setDisplay={setDisplay}
        logout={logout}
        display={display}
      />
      <div className="pl-80 pt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <ImageSlider />
        </div>
        <Live />
        <Category />
        <hr className="border-black" />
        {categories.map((categorie, index) => (
          <Individual label={categorie} key={index} />
        ))}

        <VortexDemo />
      </div>
    </div>
  );
}
