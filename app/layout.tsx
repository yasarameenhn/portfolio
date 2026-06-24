import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yasar Ameen - Generative AI Developer",
  description:
    "Portfolio of Yasar Ameen, a Generative AI Developer specializing in autonomous agents, RAG systems, and IoT-integrated AI solutions.",
  keywords: [
    "Generative AI",
    "Autonomous Agents",
    "RAG",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "IoT",
    "Yasar Ameen",
  ],
  authors: [{ name: "Yasar Ameen" }],
  openGraph: {
    title: "Yasar Ameen - Generative AI Developer",
    description:
      "Portfolio of Yasar Ameen, a Generative AI Developer specializing in autonomous agents, RAG systems, and IoT-integrated AI solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
