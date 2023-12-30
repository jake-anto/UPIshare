function validateUpiId(id) {
  if (!id) return "UPI ID is required";

  if (!id.includes("@")) return "Missing @ symbol";

  let parts = id.split("@");

  if (parts.length !== 2) return "Invalid UPI ID";
  if (parts[0] === "") return "Missing UPI ID";
  if (parts[1] === "") return "Part after @ is missing";
  if (parts[0].length < 3) return "UPI ID is too short";

  // no issues
  return "";
}

export default function validate(formData) {
  let errors = {
    id: validateUpiId(formData.id),
    name: formData.name ? "" : "Name is required",
    amount: "",
    note: "",
  };

  return errors;
}
