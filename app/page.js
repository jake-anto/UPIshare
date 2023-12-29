"use client";

import Header from "./header";
import { AppShell } from "@mantine/core";
import Form from "./form";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <>
      <AppShell header={{ height: 50 }} padding="md">
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Container size="xs" padding="md">
            <Form />
          </Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
