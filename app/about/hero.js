import { Container, Flex, Title, Text, Button, Group } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
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
      <Container size="md">
        <Flex
          gap="xl"
          justify="center"
          align="center"
          direction={{ base: "column", sm: "row" }}
          wrap="nowrap"
        >
          <div>
            <Title>
              Create beautiful and secure UPI payment links with UPIshare
            </Title>
            <Text c="dimmed" mt="md">
              No need to install any app or sign up for anything. Just enter your
              UPI ID, choose your design, and share your link. It&rsquo;s that
              simple!
            </Text>
            <Group mt={30}>
              <Button component="a" href="/" radius="xl" size="md" rightSection={<IconArrowRight />}>
                Get started
              </Button>
              <Button component="a" href="#features" variant="default" radius="xl" size="md">
                Know more
              </Button>
            </Group>
          </div>
          <div>
            <QrCard
              data={data}
              customizations={customizations}
              preview={true}
            ></QrCard>
          </div>
        </Flex>
      </Container>
    );
  }