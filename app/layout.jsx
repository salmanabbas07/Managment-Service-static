import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "../components/Modals/ModalContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SignInModal from "../components/Modals/SignInModal";
import ConsultationModal from "../components/Modals/ConsultationModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://edurise.edu.in"),
  title: {
    default: "EduRise - The Operating System for Modern Schools",
    template: "%s | EduRise School OS",
  },
  description:
    "A unique and powerful software and growth suite to transform Indian schools. Boost admissions, digitize operations with Cloud ERP, and deliver future skills.",
  keywords: [
    "School ERP",
    "School Management System",
    "Admission Marketing",
    "School Website",
    "LMS",
    "AI Education",
    "Robotics Labs",
  ],
  authors: [{ name: "EduRise Platforms Pvt. Ltd." }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "EduRise",
    title: "EduRise - The Operating System for Modern Schools",
    description:
      "A unique and powerful software and growth suite to transform Indian schools. Boost admissions, digitize operations with Cloud ERP, and deliver future skills.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="bg-white text-slate-800 antialiased selection:bg-rose-600 selection:text-white">
        <ModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <SignInModal />
          <ConsultationModal />
        </ModalProvider>
      </body>
    </html>
  );
}
