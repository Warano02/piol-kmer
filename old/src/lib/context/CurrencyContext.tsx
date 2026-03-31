"use client"
import type { ICurrency } from "@/types";
import { createContext } from "react";

export const CurrencyContext = createContext<ICurrency | undefined>(undefined)