"use client"
import type { Currency } from "@/types";
import { createContext } from "react";

export const CurrencyContext = createContext<Currency | undefined>(undefined)