import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Cyprian Obi - Web and Full-stack Developer",
  description:
    "Experienced full-stack developer specializing in modern web applications, scalable backend solutions, and intuitive user experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${robotoMono.variable}`}
    >
      <body
        className={`${inter.className} bg-[#0A192F] text-white min-h-screen`}
      >
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
