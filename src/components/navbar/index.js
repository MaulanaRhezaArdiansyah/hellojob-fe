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
    <nav className="w-full h-[15vh] md:h-[15vh] flex justify-between px-3 items-center fixed max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 right-0 bg-white md:px-32 z-20 shadow-2xl max-sm:rounded-tr-lg max-sm:rounded-tl-lg">
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
