"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Dropdown,
} from "@nextui-org/react";
import SiteLogo from "./SiteLogo";
import "./navbar.css";
import { UserAuth } from "@/app/provider/context/AuthContext";
import toast from "react-hot-toast";
import NavUser from "./NavUser";
import { IoMdLogOut } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import ScrolledSideLogo from "./ScrolledSideLogo";
// import { AcmeLogo } from "./AcmeLogo.jsx";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = UserAuth();
  const menuItems = [
    {
      url_name: "Home",
      link: "/"
    },
    {
      url_name: "About Us",
      link: "/about"
    },
    {
      url_name: "Contact Us",
      link: "/contact"
    },
    {
      url_name: "All Books",
      link: "/allBooks"
    },
    {
      url_name: "Pricing",
      link: "/pricing"
    },
    {
      url_name: "Writters",
      link: "/all-writers"
    }
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logout successful");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed");
    }
  };
  // code for scrolling
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scroll) {
        setScroll(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <Navbar
      className={`max-w-full mx-auto py-1 px-3 justify-between ${!scroll ? "bg-slate-800" : null
        }`}
      id="navBar"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="lg:hidden pr-3" justify="center">
        <NavbarBrand>
          {scroll ? <SiteLogo /> : <ScrolledSideLogo />}
        </NavbarBrand>
      </NavbarContent>
      {/* after sm */}
      <div className="flex items-center justify-between container mx-auto">
        <NavbarContent
          className="hidden lg:flex gap-4 w-full pr-5"
          justify="center"
        >
          <NavbarBrand>
            {scroll ? <SiteLogo /> : <ScrolledSideLogo />}
          </NavbarBrand>
          <NavbarItem>
            <Link
              className={`${scroll ? "text-black" : "text-white"
                } hover:text-primary duration-200`}
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${scroll ? "text-black" : "text-white"
                } hover:text-primary duration-200`}
              href="/about"
            >
              About us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${scroll ? "text-black" : "text-white"
                } hover:text-primary duration-200`}
              href="/contact"
            >
              Contact us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${scroll ? "text-black" : "text-white"
                } hover:text-primary duration-200`}
              href="/allBooks"
            >
              All Books
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${scroll ? "text-black" : "text-white"
                } hover:text-primary duration-200`}
              href="/pricing"
            >
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${scroll ? "text-black" : "text-white"
                } hover:text-primary duration-200`}
              href="/all-writers"
            >
              Writers
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          {user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="size-16 border-none h-auto w-auto"
                >
                  <NavUser></NavUser>
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Profile Actions"
                className=" py-5  text-black border rounded-2xl"
                variant="flat"
              >
                <DropdownItem key="profile" className="h-14 gap-2 pb-3">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold text-sm">{user?.email}</p>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="font-bold text-black py-2 w-full border-t pt-3 hover:text-primary duration-200"
                    href="/dashboard"
                  >
                    <div className="flex gap-2 items-center">
                      <LuLayoutDashboard />
                      Dashboard
                    </div>
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  className="hover:text-primary duration-200 font-bold "
                  onClick={handleLogout}
                >
                  <div className="flex gap-2">
                    <IoMdLogOut className="text-xl font-bold items-center" />
                    Log Out
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <button className="py-2 px-3 rounded-3xl text-md bg-blue-700 text-white">
              <Link href="/login" className="text-white">
                Login
              </Link>
            </button>
          )}
        </NavbarContent>
      </div>
      <NavbarMenu className="py-10 px-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={`${item.link}`}
              className="w-full"
              color={`danger`}
              size="lg"
            >
              {item?.url_name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
