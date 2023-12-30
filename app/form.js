import { Button, Flex, NumberInput, TextInput } from "@mantine/core";
import { IconChevronRight, IconCurrencyRupee } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Form({ formData, handleChange, handleNumberInputChange, errors }) {

  return (
    <div>
      <TextInput
        withAsterisk
        label="UPI ID"
        description="Enter the payee's UPI ID"
        placeholder="sample@upi"
        size="md"
        mb="sm"
        value={formData.id}
        error={errors.id}
        onChange={handleChange}
        name="id"
      />
      <TextInput
        withAsterisk
        label="Name"
        description="Enter the payee's name"
        placeholder="Bob"
        size="md"
        value={formData.name}
        mb="sm"
        error={errors.name}
        onChange={handleChange}
        name="name"
      />
      <NumberInput
        label="Amount"
        description="Enter the amount to be paid"
        placeholder="100"
        size="md"
        mb="sm"
        min={1}
        max={99999}
        allowNegative={false}
        clampBehavior="strict"
        decimalScale={2}
        thousandsGroupStyle="lakh"
        thousandSeparator=","
        leftSection={<IconCurrencyRupee />}
        value={formData.amount}
        error={errors.amount}
        onChange={(value) => handleNumberInputChange("amount", value)}
        name="amount"
      />
      <TextInput
        label="Note"
        description="Enter a note for the payment"
        placeholder="Dinner at Joe's"
        size="md"
        mb="sm"
        value={formData.note}
        error={errors.note}
        onChange={handleChange}
        name="note"
      />
    </div>
  );
}
