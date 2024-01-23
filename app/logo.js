import { Text } from "@mantine/core";

export default function Logo() {
  return (
    <Text
      inherit
      display="inline"
      variant="gradient"
      gradient={{ from: "blue", to: "cyan", deg: 90 }}
      fw={800}
    >
      <Text fw={400} inherit span>
        UPI
      </Text>
      share
    </Text>
  );
}
