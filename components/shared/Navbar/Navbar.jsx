import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  const navlinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-white text-black">
      <nav className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <div className="flex flex-col space-y-6">
                  {navlinks?.map((link) => (
                    <Link href={link.path} key={link.path}>
                      {link.title}
                    </Link>
                  ))}
                </div>
              </ul>
            </div>
            <Link href={"/"}>
              <Image
                src="/assets/logo.svg"
                alt="Carpo Logo"
                width={80}
                height={80}
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="flex items-center space-x-7">
              {navlinks?.map((link) => (
                <Link href={link.path} key={link.path}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="navbar-end flex space-x-5">
            <BsCart className="text-xl" />
            <CiSearch className="text-xl" />
            <Link
              href={"/"}
              className="btn border-2 border-[#FF3811] bg-none text-[#FF3811] rounded-md"
            >
              Appointment
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
