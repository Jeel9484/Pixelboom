import { Sparkles, Rocket } from "lucide-react";

export const pricingPlans = [
  {
    badge: "Basic",
    icon: <Sparkles className="text-orange-500" />,
    heading: (
      <>
        Ideal for Small <br />
        Businesses and{" "}
        <span className="text-gray-500 font-normal">Startups</span>
      </>
    ),
    price: "$3,000",
    per: "/mo",
    features: [
      "Limited customization options for AI models.",
      "Handles small datasets with essential processing tools.",
      "Standard 24–48 hour response time.",
      "Integration with a limited number of third-party tools.",
    ],
    btn: {
      label: "Get Started",
      icon: <Rocket className="text-white" />,
      className: "w-full inline-flex justify-center items-center gap-2 text-white bg-black py-3 rounded-full",
    },
  },
  {
    badge: "Premium",
    icon: <Sparkles className="text-orange-500" />,
    heading: (
      <>
        Best for Growing <br />
        Teams and{" "}
        <span className="text-gray-500 font-normal">Agencies</span>
      </>
    ),
    price: "$8,000",
    per: "/mo",
    features: [
      "Full customization options tailored to specific business needs.",
      "Supports large-scale datasets with advanced processing capabilities.",
      "Priority support with 1-hour response time.",
      "Seamless integration with a wide range of third-party tools and services.",
    ],
    btn: {
      label: "Get Started",
      icon: <Rocket className="text-white" />,
      className: "w-full inline-flex justify-center items-center gap-2 text-white bg-black py-3 rounded-full",
    },
  },
];
