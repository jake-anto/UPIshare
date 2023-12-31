import {
  ActionIcon,
  Avatar,
  Button,
  Flex,
  Group,
  Paper,
  Text,
} from "@mantine/core";
import { IconCurrencyRupee, IconShare } from "@tabler/icons-react";
import QRCode from "react-fancy-qrcode";

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

export default function QrCard({ data, customizations }) {
  const UpiUrl = generateUpiUrl(data);

  return (
    <Paper shadow="md" radius="xl" p="xl" maw="400px">
      <Group>
        {customizations.avatar && (
          <Avatar
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
          <Text c="dimmed" size="xs">
            {data.id}
          </Text>
        </div>
        {customizations.shareButton && (
          <>
            <ActionIcon
              variant="transparent"
              color={
                customizations.applyColorToShareButton
                  ? customizations.primaryColor
                  : ""
              }
            >
              <IconShare />
            </ActionIcon>
          </>
        )}
      </Group>
      <Flex justify="center" align="center" m="sm">
        <QRCode
          value={UpiUrl}
          size={175}
          color="#ffffff"
          backgroundColor="#242424"
          dotRadius="50%"
          positionRadius={["5%", "1%"]}
        />
      </Flex>
      <Text align="center" size="xs">
        Scan or click to pay
      </Text>
      {customizations.payButton && (
        <>
          <Flex align="center" m="sm">
            <Button
              leftSection={<IconCurrencyRupee />}
              color={
                customizations.applyColorToPayButton
                  ? customizations.primaryColor
                  : ""
              }
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
