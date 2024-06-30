"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

type Props = {
  children?: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
};

export function ThemeProvider({ children, ...props }: Props) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
