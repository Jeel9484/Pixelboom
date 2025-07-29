import { ChevronDown, ChevronUp } from "lucide-react";

export const faqData = [
  // LEFT COLUMN
  [
    {
      question: "What is Pixel Bloom",
      answer: null, // collapsed
      icon: <ChevronDown className="text-gray-600" />,
      boxClass: "flex justify-between items-center p-6 rounded-3xl  border border-gray-200",
    },
    {
      question: "How can I benefit from Pixel Bloom’s services?",
      answer: (
        <>
          Our AI models can enhance your business operations <br />
          by automating tasks, improving accuracy, and <br />
          providing data-driven insights.
        </>
      ),
      icon: <ChevronUp className="text-gray-600" />,
      boxClass: "p-6 rounded-3xl border border-gray-200 space-y-2",
    },
    {
      question: "How do I get started with Pixel Bloom?",
      answer: null, // collapsed
      icon: <ChevronDown className="text-gray-600" />,
      boxClass: "flex justify-between items-center p-6 rounded-3xl border border-gray-200",
    },
  ],
  // RIGHT COLUMN
  [
    {
      question: "What types of AI models do you offer?",
      answer: (
        <>
          We offer models for image recognition, natural <br />
          language processing, predictive analytics, and custom <br />
          AI solutions based on your specific requirements.
        </>
      ),
      icon: <ChevronUp className="text-gray-600" />,
      boxClass: "p-6 rounded-3xl border border-gray-200 space-y-2",
    },
    {
      question: "Are your AI models customizable?",
      answer: null,
      icon: <ChevronDown className="text-gray-600" />,
      boxClass: "flex justify-between items-center p-6 rounded-3xl  border border-gray-200",
    },
    {
      question: "How is data privacy handled?",
      answer: null,
      icon: <ChevronDown className="text-gray-600" />,
      boxClass: "flex justify-between items-center p-6 rounded-3xl border border-gray-200",
    },
  ],
];
