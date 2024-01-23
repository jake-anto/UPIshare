import { ActionIcon, Button, Flex, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBrandGithub, IconHeart } from "@tabler/icons-react";
import Logo from "./logo";

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
          <Text size="xl" component="a" href="/">
            <Logo />
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
