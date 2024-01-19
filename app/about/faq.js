import { Accordion, Container, Title } from "@mantine/core";

export default function Faq() {
  const faqs = [
    {
      question: "What is UPIshare?",
      answer:
        "UPIshare is a free and open-source web app that lets you create and share UPI payment links with ease.",
    },
    {
      question: "How does UPIshare work?",
      answer:
        "UPIshare works in three simple steps: 1. Enter your name and UPI ID, 2. Choose your design, 3. Share your link.",
    },
    {
      question: "What is UPI?",
      answer:
        "UPI stands for Unified Payments Interface. It is a real-time payment system developed by the National Payments Corporation of India (NPCI).",
    },
    {
      question: "Who can use UPIshare?",
      answer:
        "Anyone who has a UPI ID and wants to receive payments via UPI can use UPIshare. You can use it for personal or professional purposes, such as selling products, services, or donations. Ensure that you are not breaking your bank&rsquo;s terms and conditions and your local laws.",
    },
    {
      question: "Is UPIshare free?",
      answer:
        "Yes, UPIshare is free and open-source. You can even host it on your own server.",
    },
    {
      question: "Why should I trust UPIshare with my payment details?",
      answer:
        "UPIshare does not transmit or store your payment details. UPIshare is open-source, which means that anyone can view the source code and verify that it is safe to use.",
    },
  ];

  const faqAccordion = faqs.map((item) => (
    <Accordion.Item key={item.question} value={item.question}>
      <Accordion.Control>{item.question}</Accordion.Control>
      <Accordion.Panel>{item.answer}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Container size="sm">
      <Title ta="center" m="xl">
        Frequently Asked Questions
      </Title>
      <Accordion variant="separated">{faqAccordion}</Accordion>
    </Container>
  );
}
