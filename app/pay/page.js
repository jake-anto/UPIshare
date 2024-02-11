"use client";

import { AppShell, Button, Flex, useComputedColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import classes from "../colors.module.css";
import Disclaimer from "../disclaimer";
import Header from "../header";
import QrCard from "../qr-card";

export default function Pay() {
  const [disclaimer, { open, close }] = useDisclosure(true);

  // Node.js fix
  // If you know how to fix this, please open a pull request
  if (typeof document != "undefined") {
    const params = new URLSearchParams(document.location.search);
    const data = (function () {
      return {
        id: params.get("id"),
        name: params.get("name"),
        amount: params.get("amount"),
        note: params.get("note"),
      };
    })();

    const customizations = (function () {
      return {
        primaryColor: params.get("primaryColor"),
        avatarInitials: params.get("avatarInitials"),
        shareButton: params.get("shareButton"),
        payButton: params.get("payButton"),
        avatar: params.get("avatar"),
        applyColorToAvatar: params.get("applyColorToAvatar"),
        applyColorToShareButton: params.get("applyColorToShareButton"),
        applyColorToPayButton: params.get("applyColorToPayButton"),
      };
    })();

    return (
      <>
        <AppShell header={{ height: 72 }} padding="md">
          <AppShell.Header>
            <Header />
          </AppShell.Header>
          <AppShell.Main className={classes.accent}>
            <Flex justify="center" align="center" gap="md" direction="column">
              <QrCard
                data={data}
                customizations={customizations}
                preview={false}
              />
              <Button
                variant="light"
                size="xs"
                leftSection={<IconPlus />}
                component="a"
                href="/"
              >
                Create
              </Button>
            </Flex>
          </AppShell.Main>
        </AppShell>
        <Disclaimer disclaimer={disclaimer} close={close} />
      </>
    );
  }
}
