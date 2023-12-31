"use client";

import { AppShell, Flex } from "@mantine/core";
import Header from "../header";
import QrCard from "../qr-card";

export default function Pay() {
  const data = (function () {
    const params = new URLSearchParams(document.location.search);
    return {
      id: params.get("id"),
      name: params.get("name"),
      amount: params.get("amount"),
      note: params.get("note"),
    };
  })();
  const customizations = (function () {
    const params = new URLSearchParams(document.location.search);
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
            <QrCard data={data} customizations={customizations} />
          </Flex>
        </AppShell.Main>
      </AppShell>
    </>
  );
}