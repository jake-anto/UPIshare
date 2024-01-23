"use client";

import { AppShell, useComputedColorScheme } from "@mantine/core";
import Footer from "../footer";
import Header from "../header";
import Faq from "./faq";
import Features from "./features";
import Hero from "./hero";

export default function About() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const secondaryColor = computedColorScheme === "dark" ? "dark.9" : "gray.2";

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
