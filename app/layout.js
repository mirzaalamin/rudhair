import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navbar/Navigation";
import localFont from "next/font/local";
import "./globals.css";

const raleway = localFont({
  src: "./fonts/ralewayVF.ttf",
  variable: "--font-raleway",
  weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

const yesevaOne = localFont({
  src: "./fonts/yesevaOne.ttf",
  variable: "--font-yesevaOne",
  weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

export const metadata = {
  title:
    "Welcome to RudHair | Hair salon and hair dressers in Sawbridgeworth, Hertfordshire",
  description: "Hair salon and hair dressers in Sawbridgeworth, Hertfordshire",
  icons: {
    icon: "./images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${yesevaOne.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
