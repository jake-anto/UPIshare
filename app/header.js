import { Button, ActionIcon, Flex, Text, Grid } from "@mantine/core";
import { IconHeart, IconBrandGithub } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

export default function Header() {
  const isMobile = useMediaQuery("(min-width: 640px)");
  return (
    <Grid>
      <Grid.Col span={isMobile ? 2 : 3}>
        <Flex justify="flex-start" align="center" mih="72">
          {isMobile ? (
            <Button
              variant="light"
              size="sm"
              aria-label="Sponsor me"
              color="red"
              // gradient={{ from: "pink", to: "red", deg: 150 }}
              leftSection={<IconHeart />}
              ml="sm"
            >
              Sponsor
            </Button>
          ) : (
            <ActionIcon
              aria-label="Sponser Me"
              color="red"
              variant="light"
              size="lg"
              ml="sm"
            >
              <IconHeart />
            </ActionIcon>
          )}
        </Flex>
      </Grid.Col>
      <Grid.Col span={isMobile ? 8 : 6}>
        <Flex justify="center" align="center" mih="72">
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            style={{
              textAlign: "center",
            }}
          >
            UPIshare
          </Text>
        </Flex>
      </Grid.Col>
      <Grid.Col span={isMobile ? 2 : 3}>
        <Flex justify="flex-end" align="center" mih="72">
          {isMobile ? (
            <>
              <Button
                variant="subtle"
                size="sm"
                aria-label="Source Code"
                color="blue"
                // gradient={{ from: "pink", to: "red", deg: 150 }}
                rightSection={<IconBrandGithub />}
                mr="sm"
              >
                Source Code
              </Button>
            </>
          ) : (
            <ActionIcon
              aria-label="Fork me on GitHub"
              color="blue"
              variant="subtle"
              size="lg"
              mr="sm"
            >
              <IconBrandGithub />
            </ActionIcon>
          )}
        </Flex>
      </Grid.Col>
    </Grid>
  );
}
