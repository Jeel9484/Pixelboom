import { Check, X, Info } from "lucide-react";

export const benefitsTable = [
  {
    feature: (
      <>
        Experienced AI experts <Info />
      </>
    ),
    pixelBloom: (
      <>
        <Check className="text-green-500 w-5 h-5" />
        Highly experienced team
      </>
    ),
    other: (
      <>
        <X className="text-red-500 w-5 h-5" />
        Less experienced or generalized teams
      </>
    ),
    pixelBloomExtra: "rounded-t-2xl", // for top rounded only in first row
    otherExtra: "",
  },
  {
    feature: (
      <>
        Tailored AI solutions <Info />
      </>
    ),
    pixelBloom: (
      <>
        <Check className="text-green-500 w-5 h-5" />
        Customized AI solutions
      </>
    ),
    other: (
      <>
        <X className="text-red-500 w-5 h-5" />
        Generic, off-the-shelf models
      </>
    ),
    pixelBloomExtra: "",
    otherExtra: "",
  },
  {
    feature: (
      <>
        Specialized in AI model development <Info />
      </>
    ),
    pixelBloom: (
      <>
        <Check className="text-green-500 w-5 h-5" />
        Focused AI development
      </>
    ),
    other: (
      <>
        <X className="text-red-500 w-5 h-5" />
        Broader development services
      </>
    ),
    pixelBloomExtra: "",
    otherExtra: "",
  },
  {
    feature: (
      <>
        Robust data privacy and security <Info />
      </>
    ),
    pixelBloom: (
      <>
        <Check className="text-green-500 w-5 h-5" />
        Prioritized data security
      </>
    ),
    other: (
      <>
        <X className="text-red-500 w-5 h-5" />
        Potential data breaches or misuse
      </>
    ),
    pixelBloomExtra: "",
    otherExtra: "",
  },
  {
    feature: (
      <>
        Comprehensive training programs <Info />
      </>
    ),
    pixelBloom: (
      <>
        <Check className="text-green-500 w-5 h-5" />
        Extensive training
      </>
    ),
    other: (
      <>
        <X className="text-red-500 w-5 h-5" />
        Lack of training and resources
      </>
    ),
    pixelBloomExtra: "",
    otherExtra: "",
  },
  {
    feature: (
      <>
        Scalable AI models <Info />
      </>
    ),
    pixelBloom: (
      <>
        <Check className="text-green-500 w-5 h-5" />
        Designed for growth
      </>
    ),
    other: (
      <>
        <X className="text-red-500 w-5 h-5" />
        Limited scalability
      </>
    ),
    pixelBloomExtra: "rounded-b-2xl", // for bottom rounded only in last row
    otherExtra: "",
  },
];
