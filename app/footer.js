import { Anchor, Box, Container, Text } from "@mantine/core";
import Link from "next/link";
import classes from "./colors.module.css";

export default function Footer({ secondaryColor }) {
  return (
    <Box className={secondaryColor} mt="xl">
      <Container size="md" p="md">
        <Text ta="center">
          Made by{" "}
          <Anchor component={Link} href="https://itsjake.me/" target="_blank">
            Jake Anto
          </Anchor>
        </Text>
        <Text ta="center"></Text>
      </Container>
    </Box>
  );
}
