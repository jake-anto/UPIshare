import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Logo from "../logo";
import QrCard from "../qr-card";

export default function Hero() {
  const data = {
    id: "johndoe@upi",
    name: "John Doe",
    amount: "150",
    note: "Test",
  };
  const customizations = {
    primaryColor: "blue",
    avatarInitials: "JD",
    shareButton: true,
    payButton: true,
    avatar: true,
    applyColorToAvatar: true,
    applyColorToShareButton: true,
    applyColorToPayButton: true,
  };

  return (
    <Box bg="dark.9">
      <Container size="md" bg="dark.9">
        <Flex
          gap="xl"
          justify="center"
          align="center"
          direction={{ base: "column", sm: "row" }}
          wrap="nowrap"
        >
          <Box m="sm">
            <Title>
              Create beautiful and secure UPI payment links with <Logo />
            </Title>
            <Text c="dimmed" mt="md">
              No need to install any app or sign up for anything. Just enter
              your UPI ID, choose your design, and share your link. It&rsquo;s
              that simple!
            </Text>
            <Group mt={30}>
              <Button
                component="a"
                href="/"
                radius="xl"
                size="md"
                rightSection={<IconArrowRight />}
              >
                Get started
              </Button>
              <Button
                component="a"
                href="#features"
                variant="default"
                radius="xl"
                size="md"
              >
                Know more
              </Button>
            </Group>
          </Box>
          <Box m="md">
            <QrCard
              data={data}
              customizations={customizations}
              preview={true}
            ></QrCard>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
