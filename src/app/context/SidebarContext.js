"use client";
import { createContext, useContext } from "react";

export const SidebarContext = createContext();

export const useSidebar = () => {
  return useContext(SidebarContext);
};