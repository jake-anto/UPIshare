import {
  CopyButton,
  Flex,
  Text,
  TextInput,
  Tooltip,
  ActionIcon,
  rem,
} from "@mantine/core";
import QrCard from "./qr-card";
import { IconCopy, IconCheck } from "@tabler/icons-react";

function generateLink(data, customizations) {
  const params = new URLSearchParams();
  params.set("id", data.id);
  params.set("name", data.name);

  if (data.amount) {
    params.set("amount", data.amount);
  }
  if (data.note !== "") {
    params.set("note", data.note);
  }
  if (customizations.primaryColor) {
    params.set("primaryColor", customizations.primaryColor);
  }
  if (customizations.avatarInitials) {
    params.set("avatarInitials", customizations.avatarInitials);
  }
  if (customizations.shareButton) {
    params.set("shareButton", customizations.shareButton);
  }
  if (customizations.payButton) {
    params.set("payButton", customizations.payButton);
  }
  if (customizations.avatar) {
    params.set("avatar", customizations.avatar);
  }
  if (customizations.applyColorToAvatar) {
    params.set("applyColorToAvatar", customizations.applyColorToAvatar);
  }
  if (customizations.applyColorToShareButton) {
    params.set(
      "applyColorToShareButton",
      customizations.applyColorToShareButton
    );
  }
  if (customizations.applyColorToPayButton) {
    params.set("applyColorToPayButton", customizations.applyColorToPayButton);
  }

  return `${document.location.origin}/pay?${params.toString()}`;
}

export default function Share({ data, customizations }) {
  const link = generateLink(data, customizations);

  return (
    <>
      <Flex justify="center" align="center" gap="md">
        <Flex justify="center" align="flex-start" direction="column">
          <Text size="lg" fw={700}>
            Share your link
          </Text>
          <TextInput
            value={link}
            rightSection={
              <CopyButton value={link} timeout={2000}>
                {({ copied, copy }) => (
                  <Tooltip
                    label={copied ? "Copied" : "Copy"}
                    withArrow
                    position="right"
                  >
                    <ActionIcon
                      color={copied ? "teal" : "gray"}
                      variant="subtle"
                      onClick={copy}
                    >
                      {copied ? (
                        <IconCheck style={{ width: rem(16) }} />
                      ) : (
                        <IconCopy style={{ width: rem(16) }} />
                      )}
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
            }
          />
        </Flex>
        <div>
          <QrCard data={data} customizations={customizations} preview={true} />
        </div>
      </Flex>
    </>
  );
}
