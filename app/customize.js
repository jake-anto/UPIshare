import {
  ColorInput,
  Flex,
  Group,
  Switch,
  TextInput,
} from "@mantine/core";
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
  const [customizations, setCustomizations] = useState({
    primaryColor: "#fa5252",
    avatarInitials: computeAvatarInitials(data.name),
    shareButton: true,
    payButton: true,
    avatar: true,
    applyColorToAvatar: true,
    applyColorToShareButton: true,
    applyColorToPayButton: true,
  });

  const handleChange = (e) => {
    const { name, type } = e.target;

    // Fix for Switch and Chip
    const input = type === "checkbox" ? e.target.checked : e.target.value;

    setCustomizations({
      ...customizations,
      [name]: input,
    });
    console.log(customizations);
  };

  const handleColorChange = (color) => {
    setCustomizations({
      ...customizations,
      primaryColor: color,
    });
  };

  return (
    <div>
      <h1>Customize</h1>
      <Group m="sm" preventGrowOverflow={false} grow>
        <ColorInput
          format="hex"
          label="Primary color"
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
          value={customizations.primaryColor}
          onChange={handleColorChange}
          name="primaryColor"
        />
        <TextInput
          label="Avatar Initials"
          placeholder="Input placeholder"
          value={customizations.avatarInitials}
          onChange={handleChange}
          name="avatarInitials"
        />
      </Group>
      <Group m="sm" preventGrowOverflow={false} grow>
        <div>
          <Switch
            defaultChecked
            label="Apply color to Avatar"
            value={customizations.applyColorToAvatar}
            onChange={handleChange}
            name="applyColorToAvatar"
            m="sm"
          />
          <Switch
            defaultChecked
            label="Apply color to share button"
            value={customizations.applyColorToShareButton}
            onChange={handleChange}
            name="applyColorToShareButton"
            m="sm"
          />
          <Switch
            defaultChecked
            label="Apply color to pay button"
            value={customizations.applyColorToPayButton}
            onChange={handleChange}
            name="applyColorToPayButton"
            m="sm"
          />
        </div>
        <div>
          <Switch
            defaultChecked
            label="Show avatar"
            onChange={handleChange}
            m="sm"
            name="avatar"
            value={customizations.avatar}
          />
          <Switch
            defaultChecked
            label="Show share button"
            onChange={handleChange}
            m="sm"
            name="shareButton"
            value={customizations.shareButton}
          />

          <Switch
            label="Show pay button"
            onChange={handleChange}
            m="sm"
            name="payButton"
            value={customizations.payButton}
            defaultChecked
          />
        </div>
      </Group>

      <Flex justify="center" align="center">
        <QrCard data={data} customizations={customizations} />
      </Flex>
    </div>
  );
}
