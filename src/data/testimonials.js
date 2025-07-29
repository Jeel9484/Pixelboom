// /data/testimonials.js
import { LoaderPinwheel } from "lucide-react";

export const testimonialsData = [
  {
    avatar: "/assets/t-1.jpg",
    alt: "Testimonial 1",
    logo: <LoaderPinwheel className="text-black" />,
    name: "Bessie Cooper",
    title: "CEO, Bright Visions Inc",
    text: (
      <>
        Pixel Bloom’s AI models have transformed our <br /> business operations. The accuracy and efficiency <br /> of their image recognition system have <br />
        significantly reduced our processing time. We <br /> highly recommend their services!
      </>
    ),
  },
  {
    avatar: "/assets/t-3.jpg",
    alt: "Testimonial 2",
    logo: <LoaderPinwheel className="text-black" />,
    name: "Michael Rodriguez",
    title: "Product Owner, Innovate Corp.",
    text: (
      <>
        Working with Pixel Bloom has been a game- <br />
        changer for us. Their natural language processing <br /> models have enabled us to better understand and <br /> respond to customer queries, enhancing our <br /> overall customer service experience.
      </>
    ),
  },
  {
    avatar: "/assets/t-2.jpg",
    alt: "Testimonial 3",
    logo: (
      <img
        src="/assets/vector.svg"
        alt="logo-3"
        height={24}
        width={24}
        className="w-6 h-6"
        style={{ display: "inline" }}
      />
    ),
    name: "David Lee",
    title: "CFO, Financial Horizons",
    text: (
      <>
        The predictive analytics model from Pixel Bloom <br /> has provided us with invaluable insights, helping us <br /> make data-driven decisions that have boosted our <br /> sales and optimized our inventory management
      </>
    ),
  },
  {
    avatar: "/assets/t-4.jpg",
    alt: "Testimonial 4",
    logo: (
      <img
        src="/assets/logo-1.svg"
        alt="logo-4"
        height={24}
        width={24}
        className="w-6 h-6"
        style={{ display: "inline" }}
      />
    ),
    name: "Bessie Cooper",
    title: "CEO, Bright Visions Inc",
    text: (
      <>
        Pixel Bloom’s AI models have transformed our <br /> business operations. The accuracy and efficiency <br /> of their image recognition system have <br />
        significantly reduced our processing time. We <br /> highly recommend their services!
      </>
    ),
  },
];
