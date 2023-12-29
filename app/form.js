import { Button, Flex, NumberInput, TextInput } from "@mantine/core";
import { IconChevronRight, IconCurrencyRupee } from "@tabler/icons-react";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    amount: 0,
    note: "",
  });
  const [errors, setErrors] = useState({
    id: "",
    name: "",
    amount: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNumberInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateUpiId = (id) => {
    if (!id) return "UPI ID is required";

    if (!id.includes("@")) return "Missing @ symbol";

    let parts = id.split("@");

    if (parts.length !== 2) return "Invalid UPI ID";
    if (parts[0] === "") return "Missing UPI ID";
    if (parts[1] === "") return "Part after @ is missing";
    if (parts[0].length < 3) return "UPI ID is too short";

    // no issues
    return "";
  };

  const validate = () => {
    let errors = {
      id: validateUpiId(formData.id),
      name: formData.name ? "" : "Name is required",
      amount: "",
      note: "",
    };

    setErrors(errors);

    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(formData);
    }
  };

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
        placeholder="For the dinner"
        size="md"
        mb="sm"
        value={formData.note}
        error={errors.note}
        onChange={handleChange}
        name="note"
      />
      <Flex justify="center" align="center" mih="72">
        <Button rightSection={<IconChevronRight />} onClick={handleSubmit}>
          Generate QR Code
        </Button>
      </Flex>
    </div>
  );
}
