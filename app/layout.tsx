import "../assets/styles/global.css";
import { Poppins } from "next/font/google";

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
    <html lang="en" className={poppins.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
