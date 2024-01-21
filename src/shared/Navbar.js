"use client";
import React from "react";
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

const Nav = () => {
  return (
    <section className="fixed top-0 z-50 w-full bg-black text-white">
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

            <NavbarContent className=" md:flex gap-4 justify-end">
              <div className="md:flex hidden gap-4">
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
              </div>
              {/* small device manu icon and items */}
              <div className="hidden items-center gap-4">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <div className="w-6 h-6">
                      <GiHamburgerMenu className="text-4xl" />
                    </div>
                  </DropdownTrigger>

                  <DropdownMenu
                    aria-label="Profile Actions"
                    className="bg-gradient-to-tr from-yellow-200 to-[#1ba752] text-black border rounded-2xl"
                    variant="flat"
                  >
                    <DropdownItem  className="h-full gap-2">
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
              {/* user profile, user email, display name and logout */}
              <div className="flex items-center gap-4">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <div className="w-6 h-6">
                      <CgProfile className="text-4xl" />
                    </div>
                  </DropdownTrigger>

                  <DropdownMenu
                    aria-label="Profile Actions"
                    className="bg-gradient-to-tr from-yellow-200 to-[#1ba752] text-black border rounded-2xl"
                    variant="flat"
                  >
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </NavbarContent>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default Nav;
