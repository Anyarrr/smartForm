export const maskCardNumber = (value: string) => {
  const digits = value.replace(/\s/g, "");
  if (digits.length < 6) return value;
  const maskedSection = "*".repeat(digits.length - 6);
  return `${digits.slice(0, 2)}${maskedSection}${digits.slice(-4)}`
    .replace(/(.{4})/g, "$1 ")
    .trim();
};