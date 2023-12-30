import { ActionIcon, Avatar, Flex, Group, Paper, Text } from "@mantine/core";
import { IconCreditCardPay, IconShare } from "@tabler/icons-react";
import { useState } from "react";
import QRCode from "react-fancy-qrcode";

export default function QrCard({ data, avatarColor, avatarInitials }) {
  return (
    <Paper shadow="md" radius="xl" p="xl" maw="400px">
      <Group>
        <Avatar color={avatarColor}>{avatarInitials}</Avatar>
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {data.name}
          </Text>
          <Text c="dimmed" size="xs">
            {data.id}
          </Text>
        </div>
        <ActionIcon variant="transparent" color={avatarColor}>
          <IconShare />
        </ActionIcon>
      </Group>
      <Flex justify="center" align="center" m="sm">
        <QRCode
          value={data.id}
          size={175}
          color="#ffffff"
          backgroundColor="#242424"
          dotRadius="50%"
          positionRadius={["5%", "1%"]}
        />
      </Flex>
    </Paper>
  );
}
