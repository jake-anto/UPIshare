import { Button, List, Modal, Text, Title, ScrollArea } from "@mantine/core";

export default function Disclaimer({ disclaimer, close }) {
  return (
    <Modal
      centered
      opened={disclaimer}
      onClose={close}
      title={
        <Title order={1} size="h2">
          Disclaimer
        </Title>
      }
      closeOnClickOutside={false}
      closeOnEscape={false}
      withCloseButton={false}
      scrollAreaComponent={ScrollArea.y}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Text>
        <Text span fw={500}>
          UPIshare
        </Text>{" "}
        is an app that allows you to share your UPI payment links with others.
        It is currently in{" "}
        <Text span c="red">
          early Alpha stage
        </Text>{" "}
        and may contain bugs and security issues. By using this app, you agree
        to the following terms and conditions:
      </Text>
      <List my="sm">
        <List.Item>
          UPIshare does not guarantee that your payment will be successful or
          that the recipient will receive the correct amount. You are solely
          responsible for verifying the information before making any payment.
        </List.Item>
        <List.Item>
          UPIshare is not affiliated with any bank or payment service provider.
          You are solely responsible for complying with the terms and conditions
          of your bank and payment service provider.
        </List.Item>
        <List.Item>
          UPIshare is not liable for any loss, damage, or inconvenience caused
          by the use or misuse of this app. You are solely responsible for any
          illegal use, fraud, or mistake that may occur while using this app.
        </List.Item>
        <List.Item>
          UPIshare reserves the right to modify, suspend, or terminate this app
          at any time without prior notice or consent.
        </List.Item>
      </List>
      By clicking &quot;I Agree&quot;, you acknowledge that you have read and
      understood this disclaimer and that you agree to abide by it. If you do
      not agree, please do not use this app.
      <div style={{ textAlign: "right" }}>
        <Button component="a" href="/about" variant="light">Learn more</Button>
        <Button onClick={close} m="sm">
          I Agree
        </Button>
      </div>
    </Modal>
  );
}
