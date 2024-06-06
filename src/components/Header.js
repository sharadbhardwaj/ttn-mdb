import React, { useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import {navigation} from '../constants/navigation';
import avatar from "../assets/Netflix-avatar.png";



const Header = () => {
  const [searchInput, setSearchInput] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if(searchInput) {
    navigate(`/search?q=${searchInput}`); 

    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-4 flex items-center h-full">
        <div>
          <Link to="/">
            <img className="rounded-2xl bg-transparent" src={logo} alt="logo" width={120} />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              placeholder="Search here..."
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            ></input>
            <button className="text-2xl text-white">
              {" "}
              <IoSearchOutline />
            </button>
          </form>

          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={avatar} alt="user icon" width="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
