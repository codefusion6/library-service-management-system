"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownMenu, DropdownTrigger, Dropdown } from "@nextui-org/react";
import SiteLogo from "./SiteLogo";
import "./navbar.css"
import { UserAuth } from "@/app/provider/context/AuthContext";
import NavUser from "./NavUser";
// import { AcmeLogo } from "./AcmeLogo.jsx";
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { user } = UserAuth()
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
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
    return (
        <Navbar
            className="max-w-full bg-slate-600 mx-auto bg-opacity-70 py-1 px-3 justify-between" id="navBar"
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="lg:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="lg:hidden pr-3" justify="center">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <SiteLogo />
                </NavbarBrand>
            </NavbarContent>
            {/* after sm */}
            <div className="flex items-center justify-between container mx-auto">
                <NavbarContent className="hidden lg:flex gap-4 w-full pr-5" justify="center">
                    <NavbarBrand>
                        <SiteLogo />
                    </NavbarBrand>
                    <NavbarItem>
                        <Link className="text-white hover:text-primary duration-200" href="/">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-white hover:text-primary duration-200" href="/about">
                            About us
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-white hover:text-primary duration-200" href="/contact">
                            Contact us
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-white hover:text-primary duration-200" href="/our-services">
                            Our Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-white hover:text-primary duration-200" href="/allBooks">
                            All Books
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-white hover:text-primary duration-200" href="/pricing">
                            Pricing
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-white hover:text-primary duration-200" href="/all-writers">
                            Writers
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">

                    {user ? (
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Button variant="bordered" className="size-16 border-none h-auto w-auto">
                                    <NavUser></NavUser>
                                </Button >
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Profile Actions"
                                className="bg-gradient-to-tr py-5 from-yellow-200 to-[#1ba752] text-black border rounded-2xl"
                                variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2 pb-3">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">{user?.email}</p>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link
                                        className="font-bold text-black py-2 w-full border-t pt-3 hover:text-primary duration-200"
                                        href="/dashboard">
                                        Dashboard
                                    </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link
                                        className="font-bold py-2 w-full border-t pt-3 hover:text-primary duration-200 text-black"
                                        href="/userProfile">
                                        Profile
                                    </Link>
                                </DropdownItem>
                                <DropdownItem
                                    key="logout"
                                    color="danger"
                                    className="hover:text-primary duration-200 font-bold"
                                    onClick={handleLogout}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <button className="py-2 px-3 rounded-3xl text-md bg-green-700 text-white">
                            <Link href="/login" className="text-white">Login</Link>
                        </button>
                    )}
                </NavbarContent>
            </div>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
