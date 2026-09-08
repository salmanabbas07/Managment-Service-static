import About from "../../components/About/About";

export const metadata = {
  title: "About Us - EduRise School Growth & Technology Platform",
  description:
    "Discover EduRise. Founded by educational technologists and growth strategists, empowering 150+ partner schools across India with sustainable growth and modern systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us - EduRise School Growth & Technology Platform",
    description:
      "Discover EduRise. Founded by educational technologists and growth strategists, empowering 150+ partner schools across India with sustainable growth and modern systems.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <About />;
}
