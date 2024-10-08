"use client";

import { AppShell, Button, Container, Flex, Stepper } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconChevronLeft,
  IconChevronRight,
  IconForms,
  IconShare3,
  IconWand,
} from "@tabler/icons-react";
import { useState } from "react";
import Customize from "./customize";
import Form from "./form";
import Header from "./header";
import Share from "./share";
import validate from "./validate";
import Disclaimer from "./disclaimer";

function computeAvatarInitials(name) {
  let parts = name.split(" ");
  if (parts.length === 1) {
    return parts[0].slice(0, 1).toUpperCase();
  } else {
    return (
      parts[0].slice(0, 1).toUpperCase() +
      parts[parts.length - 1].slice(0, 1).toUpperCase()
    );
  }
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [disclaimer, { open, close }] = useDisclosure(true);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    amount: "",
    note: "",
  });
  const [errors, setErrors] = useState({
    id: "",
    name: "",
    amount: "",
    note: "",
  });
  const [customizations, setCustomizations] = useState({
    primaryColor: "#fa5252",
    avatarInitials: "",
    shareButton: true,
    payButton: true,
    avatar: true,
    applyColorToAvatar: true,
    applyColorToShareButton: true,
    applyColorToPayButton: true,
  });

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleFormSubmit = () => {
    let errors = validate(formData);
    setErrors(errors);

    customizations.avatarInitials = computeAvatarInitials(formData.name);

    if (Object.values(errors).every((error) => error === "")) {
      nextStep();
    }
  };

  const small_screen = useMediaQuery("(max-width: 640px)");

  return (
    <>
      <AppShell header={{ height: 72 }} padding="md">
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Container size="sm" padding="sm" mb={12}>
            <Stepper
              active={active}
              onStepClick={setActive}
              wrap={false}
              styles={{
                stepBody: {
                  display: small_screen ? "none" : "flex",
                },
              }}
            >
              <Stepper.Step
                label="First step"
                description="Enter payment info"
                icon={<IconForms />}
              ></Stepper.Step>
              <Stepper.Step
                label="Second step"
                description="Customize your link"
                icon={<IconWand />}
              ></Stepper.Step>
              <Stepper.Step
                label="Share"
                description="Share your link"
                icon={<IconShare3 />}
              ></Stepper.Step>
              <Stepper.Completed>
                Completed, click back button to get to previous step
              </Stepper.Completed>
            </Stepper>
          </Container>
          <Container size="xs" padding="md">
            {active === 0 && (
              <>
                <Form data={formData} setData={setFormData} errors={errors} />
                <Flex justify="center" align="center" mih="72">
                  <Button
                    rightSection={<IconChevronRight />}
                    onClick={handleFormSubmit}
                  >
                    Customize
                  </Button>
                </Flex>
              </>
            )}
            {active === 1 && (
              <>
                <Customize
                  data={formData}
                  customizations={customizations}
                  setCustomizations={setCustomizations}
                />
                <Flex justify="center" align="center" mih="72">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    leftSection={<IconChevronLeft />}
                    mr="md"
                  >
                    Edit info
                  </Button>
                  <Button
                    rightSection={<IconChevronRight />}
                    onClick={handleFormSubmit}
                  >
                    Share and Download
                  </Button>
                </Flex>
              </>
            )}
            {active === 2 && (
              <>
                <Share data={formData} customizations={customizations} />
                <Flex justify="center" align="center" mih="72">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    leftSection={<IconChevronLeft />}
                    mr="md"
                  >
                    Customize
                  </Button>
                </Flex>
              </>
            )}
          </Container>
        </AppShell.Main>
      </AppShell>
      <Disclaimer disclaimer={disclaimer} close={close} />
    </>
  );
}
