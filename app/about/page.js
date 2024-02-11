"use client";

import { AppShell } from "@mantine/core";
import Footer from "../footer";
import Header from "../header";
import Faq from "./faq";
import Features from "./features";
import Hero from "./hero";
import classes from "../colors.module.css";

export default function About() {
  return (
    <AppShell header={{ height: 72 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Hero secondaryColor={classes.accent} />
        <Features />
        <Faq />
        <Footer secondaryColor={classes.accent} />
      </AppShell.Main>
    </AppShell>
  );
}
