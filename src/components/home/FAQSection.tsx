import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I place an order for your services?",
    answer: "Orders can be placed by contacting our customer service team via email at sales@movetekshipping.com or by calling +971 58 234 8995. Our team will assist you in arranging the appropriate transportation solution for your cargo.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods, including credit/debit cards, bank transfers, and other secure payment options. For detailed information, please contact our customer service team.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping services for both air and sea cargo. Our extensive network allows us to handle shipments to and from over 150 countries worldwide.",
  },
  {
    question: "What types of cargo can you handle?",
    answer: "We handle all types of cargo including general freight, hazardous materials, temperature-controlled goods, oversized cargo, heavy lift equipment, and project cargo. Our team has expertise in managing specialized shipments.",
  },
  {
    question: "How can I track my shipment?",
    answer: "We provide real-time tracking for all shipments. Once your cargo is in transit, you'll receive tracking information via email. You can also contact our customer service team for updates at any time.",
  },
  {
    question: "What is your cargo insurance coverage?",
    answer: "We offer comprehensive cargo insurance with coverage up to $500M. Our insurance options protect your shipments against loss, damage, and other risks during transit. Contact us for specific coverage details.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-ocean/10 text-ocean text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our air cargo, sea freight, land transport, and other logistics services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-medium transition-all"
              >
                <AccordionTrigger className="text-lg font-heading font-semibold text-foreground hover:text-ocean py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
