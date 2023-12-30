import { Group, Button, ActionIcon, Flex, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";

export default function Header() {
  return (
    <Group
      justify="space-between"
      preventGrowOverflow={false}
      wrap="nowrap"
      grow
    >
      <Flex justify="flex-start" align="center" mih="72">
        <Button
          variant="light"
          size="sm"
          aria-label="Sponsor me"
          color="red"
          // gradient={{ from: "pink", to: "red", deg: 150 }}
          leftSection={<IconHeart />}
          ml="sm"
          hiddenFrom="xs"
        >
          Sponsor
        </Button>
      </Flex>
      <Flex justify="center" align="center" mih="72">
        <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          UPI QR Code Generator
        </Text>
      </Flex>
      <Flex justify="flex-end" align="center" mih="72"></Flex>
    </Group>
  );
}
