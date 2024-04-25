import "./globals.css";
import { poppins } from "./fonts";
import TopBar from "@/components/topBar";
import Footer from "@/components/footer";

export const metadata = {
  title: "CountryExplorer",
  description: "Generated by Next.js",
  icons: {
    icon: "/icons/earth-icon.ico",
    apple: "/icons/earth-icon.ico",
  },
};

export default function RootLayout({ children = [] }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
