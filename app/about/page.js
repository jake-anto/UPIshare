"use client";

import { AppShell } from "@mantine/core";
import Footer from "../footer";
import Header from "../header";
import Faq from "./faq";
import Features from "./features";
import Hero from "./hero";

export default function About() {
  // doesn't work in SSR
  function getColorScheme() {
    // Node.js fix
    // If you know how to fix this, please open a pull request
    if (typeof document != "undefined") {
      return document.documentElement.getAttribute("data-mantine-color-scheme");
    }
  }

  const secondaryColor = getColorScheme() === "dark" ? "dark.9" : "gray.2";

  return (
    <AppShell header={{ height: 72 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Hero secondaryColor={secondaryColor} />
        <Features />
        <Faq />
        <Footer secondaryColor={secondaryColor} />
      </AppShell.Main>
    </AppShell>
  );
}
