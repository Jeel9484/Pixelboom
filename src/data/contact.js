export const contactSection = {
  badge: {
    icon: "/assets/star.svg",
    text: "Contact Us",
  },
  title: (
    <>
      Voices of Success from <br /> Our
      <span className="text-gray-600"> Satisfied Clients</span>
    </>
  ),
  left: {
    heading: "Let’s Get Started",
    description: (
      <>
        Provide us with some details and let's begin <br />
        transforming your business together!
      </>
    ),
    form: [
      { type: "text", placeholder: "Full Name" },
      { type: "email", placeholder: " Email" },
      { type: "textarea", placeholder: "How Can We Help You?" },
    ],
    button: {
      text: "Send A Message",
    },
  },
  right: {
    image: "/assets/p-1.jpg",
    alt: "Contact Us",
    width: 540,
    height: 532,
  },
};
export const contactSection2 ={
  form: [
      { type: "text", placeholder: "Jonnie Dawson" },
      { type: "email", placeholder: " UI Wiki@2024.net" },
      { type: "textarea", placeholder: "Your message" },
    ],
    button: {
      text: "Send A Message",
    },
}

