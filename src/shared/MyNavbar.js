"use client";
import React, { } from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../../public/images/bookflow.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
import { UserAuth } from "@/app/provider/context/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";
// import ThemeSwitch from "@/components/ThemeSwitch";

const MyNavbar = () => {
  // const [dark, setDark] = useState(false)
  const [scroll, setScroll] = useState(false);
  const { user, logOut } = UserAuth();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scroll) {
        setScroll(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed');
    }
  };
  return (
    <>
      <section className="fixed top-0 z-50 w-full dark:bg-white dark:text-black bg-black text-white">
        <div className="container mx-auto">
          <div className="py-4">
            <Navbar>
              <NavbarBrand>
                <Link href="/">
                  <Image
                    className="max-w-[200px]"
                    src={logo}
                    alt="our logo"
                    width={200}
                    height={100}
                  />
                </Link>
              </NavbarBrand>
              {/* Laptop and tablet navbar */}
              <NavbarContent className="lg:flex gap-4 justify-end">
                <div className="md:flex hidden gap-4">
                  <NavbarItem>
                    <Link className="" href="/">
                      Home
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link className="" href="/about">
                      About us
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link className="" href="/contact">
                      Contact us
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link className="" href="/our-services">
                      Our Services
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link className="" href="/dashboard">
                      Dashboard
                    </Link>
                  </NavbarItem>
                  {/* <ThemeSwitch></ThemeSwitch> */}
                </div>
                {/* Small device menu icon and items */}
                <div id="mobile-menu" className="md:hidden items-center gap-4 flex">
                  {/* Dropdown menu for small devices */}
                  <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                      <div className="w-6 h-6">
                        <GiHamburgerMenu className="text-4xl" />
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Mobile Menu"
                      className="bg-gradient-to-tr from-yellow-200 to-[#1ba752] text-black border rounded-2xl"
                      variant="flat">
                      {/* Mobile menu items */}
                      <DropdownItem className="h-full gap-2">
                        <NavbarItem>
                          <Link className="text-white" href="/">
                            Home
                          </Link>
                        </NavbarItem>
                        <NavbarItem>
                          <Link className="text-white" href="/about">
                            About us
                          </Link>
                        </NavbarItem>
                        <NavbarItem>
                          <Link className="text-white" href="/contact">
                            Contact us
                          </Link>
                        </NavbarItem>
                        <NavbarItem>
                          <Link className="text-white" href="/contact">
                            Our Services
                          </Link>
                        </NavbarItem>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                {/* User profile, user email, display name, and logout */}
                <div className="flex items-center gap-4">
                  {user ? (
                    <Dropdown placement="bottom-end">
                      <DropdownTrigger>
                        {user.photoURL ? (
                          <Image
                            src={user.photoURL}
                            alt="User Profile"
                            size="small"
                            className="rounded-full cursor-pointer"
                            height={30}
                            width={30}
                          />
                        ) : (
                          <div className="w-6 h-6">
                            <CgProfile className="text-4xl" />
                          </div>
                        )}
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Profile Actions"
                        className="bg-gradient-to-tr from-yellow-200 to-[#1ba752] text-black border rounded-2xl"
                        variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                          <p className="font-semibold">Signed in as</p>
                          <p className="font-semibold">{user?.email}</p>
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                          Log Out
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <button className="py-2 px-3 rounded-3xl text-md bg-green-700 text-white">
                      <Link href="/login">Login</Link>
                    </button>
                  )}
                </div>
                <ThemeToggle></ThemeToggle>
              </NavbarContent>
            </Navbar>
          </div>
        </div>
      </section >
    </>
  );
};

export default MyNavbar;