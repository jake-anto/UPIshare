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
import {
  IconCopy,
  IconCheck,
  IconBrandWhatsapp,
  IconMessage,
  IconMail,
  IconBrandReddit,
  IconBrandTelegram,
  IconDots,
} from "@tabler/icons-react";

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

function generateShareText(data) {
  let text = `Pay ${data.name}`;
  if (data.amount) {
    text += ` ${data.amount}`;
  }
  if (data.note) {
    text += ` for "${data.note}"`;
  }
  text += ` using UPI with this link:`;

  return text;
}

export default function Share({ data, customizations }) {
  const link = generateLink(data, customizations);
  const shareText = generateShareText(data);

  return (
    <>
      <Flex justify="center" align="center" gap="md">
        <TextInput
          value={link}
          label="Share your custom QR code"
          description="Copy this link and share it with others"
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
        <Flex justify="center" align="center" gap="sm" direction="column">
          <Text
            style={{
              fontWeight: 500,
            }}
          >
            Share link on
          </Text>
          <Flex justify="center" align="center" gap="sm">
            <Tooltip label="Share on SMS" withArrow>
              <ActionIcon
                variant="light"
                component="a"
                href={`sms:?body=${shareText} ${link}`}
              >
                <IconMessage />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Share on WhatsApp" withArrow>
              <ActionIcon
                variant="light"
                component="a"
                href={`https://wa.me/?text=${shareText} ${link}`}
              >
                <IconBrandWhatsapp />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Share on Telegram" withArrow>
              <ActionIcon
                variant="light"
                component="a"
                href={`https://t.me/share/url?url=${link}&text=${shareText}`}
              >
                <IconBrandTelegram />
              </ActionIcon>
            </Tooltip>
          </Flex>
          <Flex justify="center" align="center" gap="sm">
            <Tooltip label="Share on Email" withArrow>
              <ActionIcon
                variant="light"
                component="a"
                // slice(0, -1) to remove ":" from shareText
                href={`mailto:?subject=${shareText.slice(
                  0,
                  -1
                )}&body=${shareText} ${link}`}
              >
                <IconMail />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Share on Reddit" withArrow>
              <ActionIcon
                variant="light"
                component="a"
                href={`https://www.reddit.com/submit?url=${link}&title=${shareText.slice(
                  0,
                  -1
                )}`}
              >
                <IconBrandReddit />
              </ActionIcon>
            </Tooltip>

            <Tooltip label="Share using other apps" withArrow>
              <ActionIcon
                variant="light"
                onClick={() => {
                  navigator.share({
                    text: shareText,
                    url: link,
                  });
                }}
              >
                <IconDots />
              </ActionIcon>
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" gap="md" direction="column">
        <QrCard data={data} customizations={customizations} preview={false} />
      </Flex>
    </>
  );
}
