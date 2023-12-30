import { ColorInput, Flex, Group, Switch, TextInput } from "@mantine/core";
import { useState } from "react";
import QrCard from "./qr-card";

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

export default function Customize({ data }) {
  const [avatarColor, setAvatarColor] = useState("#fa5252");
  const [avatarInitials, setAvatarInitials] = useState(
    computeAvatarInitials(data.name)
  );

  return (
    <div>
      <h1>Customize</h1>
      <Group preventGrowOverflow={false} grow>
        <ColorInput
          format="hex"
          label="Avatar color"
          swatches={[
            "#2e2e2e",
            "#868e96",
            "#fa5252",
            "#e64980",
            "#be4bdb",
            "#7950f2",
            "#4c6ef5",
            "#228be6",
            "#15aabf",
            "#12b886",
            "#40c057",
            "#82c91e",
            "#fab005",
            "#fd7e14",
          ]}
          value={avatarColor}
          onChange={setAvatarColor}
        />
        <TextInput
          label="Avatar Initials"
          placeholder="Input placeholder"
          value={avatarInitials}
          onChange={setAvatarInitials}
        />
        <Switch defaultChecked label="Apply color to share button" />
      </Group>

      <Flex justify="center" align="center">
        <QrCard
          data={data}
          avatarColor={avatarColor}
          avatarInitials={avatarInitials}
        />
      </Flex>
    </div>
  );
}
