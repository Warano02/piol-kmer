"use client"
import type { ILanguage } from "@/types";
import { createContext } from "react";

export const LanguageContext = createContext<ILanguage | undefined>(undefined)