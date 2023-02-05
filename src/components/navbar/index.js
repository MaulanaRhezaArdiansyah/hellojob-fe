import React, { useEffect, useState } from "react";
import { UnAuth } from "./UnAuth";
import { Auth } from "./Auth";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <nav className="w-full h-[10vh] md:h-[15vh] flex justify-between px-3 items-center fixed bg-white md:px-32 z-20">
      <Link to="/">
        <div className="flex">
          <p className="text-purple text-xl cursor-pointer font-bold">
            HelloJob
          </p>
        </div>
      </Link>

      {isLogin ? <Auth setIsLogin={setIsLogin} /> : <UnAuth />}
    </nav>
  );
};
