import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { Navigation } from "./src/infrastructure/navigation";
import { useFonts, theme } from "./src/infrastructure/theme";

export default function App() {
  if (!useFonts()) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
