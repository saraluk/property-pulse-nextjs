import { Poppins } from "next/font/google";
import "@/assets/styles/global.css";
import TopNav from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property",
};

const RootLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en" className={poppins.className}>
        <body>
          <TopNav />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
