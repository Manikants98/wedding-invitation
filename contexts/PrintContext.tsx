"use client";

import { createContext, useContext, ReactNode } from "react";

const PrintContext = createContext<boolean>(false);

export function PrintProvider({
  children,
  isPrint = false,
}: {
  children: ReactNode;
  isPrint?: boolean;
}) {
  return (
    <PrintContext.Provider value={isPrint}>{children}</PrintContext.Provider>
  );
}

export function usePrint() {
  return useContext(PrintContext);
}
