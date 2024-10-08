import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  Text,
} from "@mantine/core";
import { IconCurrencyRupee, IconShare } from "@tabler/icons-react";
import QRCode from "react-fancy-qrcode";
import classes from "./qr-card.module.css";

function generateUpiUrl(data) {
  let url = `upi://pay?pa=${data.id}&pn=${data.name}`;

  if (data.amount) {
    url += `&am=${data.amount}`;
  }

  if (data.note !== "") {
    url += `&tn=${data.note}`;
  }

  return url;
}

export default function QrCard({ data, customizations, preview }) {
  const UpiUrl = generateUpiUrl(data);

  return (
    <Paper shadow="md" radius="xl" p="xl" maw="400px">
      <Group>
        {customizations.avatar && (
          <Avatar
            autoContrast
            color={
              customizations.applyColorToAvatar
                ? customizations.primaryColor
                : ""
            }
          >
            {customizations.avatarInitials}
          </Avatar>
        )}

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {data.name}
          </Text>
          <Text
            c="dimmed"
            size="xs"
            id="upiId"
            onClick={
              !preview ? () => navigator.clipboard.writeText(data.id) : () => {}
            }
            style={{ cursor: "pointer" }}
          >
            {data.id}
          </Text>
        </div>
        {customizations.shareButton && (
          <>
            <ActionIcon
              variant="subtle"
              radius="md"
              color={
                customizations.applyColorToShareButton
                  ? customizations.primaryColor
                  : ""
              }
              onClick={
                !preview
                  ? () =>
                      navigator.share({
                        url: window.location.href,
                        title: "Pay",
                        text: `Pay ${data.name} using UPI!`,
                      })
                  : () => {}
              }
            >
              <IconShare />
            </ActionIcon>
          </>
        )}
      </Group>
      <Flex justify="center" align="center" m="sm">
        <Box className={classes.qrCode}>
          <QRCode
            value={UpiUrl}
            size={175}
            color="black"
            backgroundColor="#00000000" // transparent
            dotRadius="50%"
            positionRadius={["5%", "1%"]}
          />
        </Box>
      </Flex>
      <Text align="center" size="xs">
        Scan or click to pay
      </Text>
      {customizations.payButton && (
        <>
          <Flex align="center" m="sm">
            <Button
              autoContrast
              leftSection={<IconCurrencyRupee />}
              color={
                customizations.applyColorToPayButton
                  ? customizations.primaryColor
                  : ""
              }
              onClick={!preview ? () => window.open(UpiUrl) : () => {}}
              fullWidth
            >
              Proceed to Pay
            </Button>
          </Flex>
        </>
      )}
    </Paper>
  );
}
