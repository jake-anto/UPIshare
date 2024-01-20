import { Container, Title, Text, ThemeIcon, SimpleGrid, Box } from "@mantine/core";
import {
  IconAdCircleOff,
  IconBrandOpenSource,
  IconDownloadOff,
  IconQrcode,
  IconRocket,
  IconShare,
  IconSpyOff,
} from "@tabler/icons-react";

const featuresList = [
  {
    icon: IconBrandOpenSource,
    title: "Free and open-source",
    description:
      "UPIshare is free and open-source. You can even host it on your own server.",
  },
  {
    icon: IconSpyOff,
    title: "Privacy-focused",
    description:
      "Your payment details are not stored or logged by us. You can verify this by checking the source code.",
  },
  {
    icon: IconQrcode,
    title: "Personalized payment links",
    description:
      "Choose from different colors, shapes, and avatars to make your QR code unique and attractive.",
  },
  {
    icon: IconAdCircleOff,
    title: "No ads",
    description:
      "UPIshare is completely ad-free. We do not show any ads on the website.",
  },
  {
    icon: IconRocket,
    title: "Fast and reliable",
    description:
      "UPIshare is built with modern web technologies and hosted on a fast and reliable server.",
  },
  {
    icon: IconDownloadOff,
    title: "No installation required",
    description:
      "UPIshare is a web app. You can use it on any device without installing anything.",
  }
];

function Feature({ icon, title, description }) {
  return (
    <Box m="sm">
      <ThemeIcon variant="light" size={40} radius="xl">
        {icon}
      </ThemeIcon>
      <Title mt="sm" mb={7} size="md">
        {title}
      </Title>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </Box>
  );
}

export default function Features() {
    const featuresGrid = featuresList.map((item) => (
      <Feature
        key={item.title}
        icon={<item.icon />}
        title={item.title}
        description={item.description}
      />
    ));
  return (
    <Container size="md">
      <Title ta="center" m="xl">Features</Title>
      <SimpleGrid cols={{ base: 1, sm: 3}}>
        {featuresGrid}
      </SimpleGrid>
    </Container>
  );
}
