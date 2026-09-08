import Home from "../components/Home/Home";

export const metadata = {
  title: "EduRise - The Operating System for Modern Schools",
  description:
    "A unique and powerful software and growth suite to transform Indian schools. Boost admissions, digitize operations with Cloud ERP, and deliver future skills.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EduRise - The Operating System for Modern Schools",
    description:
      "A unique and powerful software and growth suite to transform Indian schools. Boost admissions, digitize operations with Cloud ERP, and deliver future skills.",
    url: "/",
  },
};

export default function Page() {
  return <Home />;
}
