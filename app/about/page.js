"use client";

import { AppShell } from "@mantine/core";
import Header from "../header";
import Faq from "./faq";
import Hero from "./hero";

export default function About() {
  return (
    <AppShell header={{ height: 72 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main bg="dark.9">
        <Hero />
        <Faq />
      </AppShell.Main>
    </AppShell>
  );
}
