import HomePage from "@modules/home"


require("dotenv").config();
export const metadata = {
  title: "Antonio Vidakovic - UX/UI Designer | Problem-Solving User Experience and Interface Design",
  description: "As a UX/UI designer, I create quality user experiences and interfaces that solve problems and improve products. Learn more about my process and see examples of my work. Contact me today to collaborate on your next project.",
  openGraph: {
    url: process.env.SITE_URL,
    title:
      "Antonio Vidakovic - UX/UI Designer | Problem-Solving User Experience and Interface Design",
    description:
      "As a UX/UI designer, I create quality user experiences and interfaces that solve problems and improve products. Learn more about my process and see examples of my work. Contact me today to collaborate on your next project.",
  }
}

export default function Home() {
  return (
      <HomePage />
  )
}
