"use client";

import { AppShell, Flex } from "@mantine/core";
import Header from "../header";
import QrCard from "../qr-card";
import Disclaimer from "../disclaimer";
import { useDisclosure } from "@mantine/hooks";

export default function Pay() {
  const [disclaimer, { open, close }] = useDisclosure(true);

  // Node.js fix
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
          <AppShell.Main>
            <Flex justify="center" align="center" gap="md">
              <QrCard
                data={data}
                customizations={customizations}
                preview={false}
              />
            </Flex>
          </AppShell.Main>
        </AppShell>
        <Disclaimer disclaimer={disclaimer} close={close} />
      </>
    );
  }
}
