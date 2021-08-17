import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <ExpoStatusBar style="auto" />
    </>
  );
}
