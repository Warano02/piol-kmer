"use client"
import type { AppContextType } from "@/types";
import { createContext } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined)