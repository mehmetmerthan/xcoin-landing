import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does this platform work?",
    answer:
      "You invest by purchasing X Coin. Your investments are used by our professional team for company trading, and profits are shared fairly.",
    value: "item-1",
  },
  {
    question: "Are my investments secure?",
    answer:
      "Yes, our blockchain infrastructure and expert team ensure your funds are protected at the highest level.",
    value: "item-2",
  },
  {
    question: "How are profits distributed?",
    answer:
      "Profits are distributed fairly based on your investment amount and transferred to your wallet periodically.",
    value: "item-3",
  },
  {
    question: "What is the minimum investment amount?",
    answer:
      "The minimum investment amount is the equivalent of 100 USD in X Coin.",
    value: "item-4",
  },
  {
    question: "When can I withdraw my funds?",
    answer:
      "Your funds can be withdrawn after the specified lock-in period is completed.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
