import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

export const Chat = () => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-base h-screen md:pt-28 md:px-32">
        This is chat pages
      </main>
      <Footer />
    </>
  );
};
