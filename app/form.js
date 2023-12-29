import { useState } from "react";
import { TextInput } from "@mantine/core";

export default function Form() {
  return (
    <div>
      <TextInput
        label="UPI ID"
        description="Enter the payee's UPI ID"
        placeholder="Your name"
      />
    </div>
  );
}
