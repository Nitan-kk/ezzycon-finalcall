import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ezzycon.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ezzycon | AI Automation & Digital Systems Company",
    template: "%s | Ezzycon",
  },

  description:
    "Ezzycon builds high-performance websites, AI-powered automation, and intelligent digital systems that help businesses grow, connect, and operate smarter.",

  keywords: [
    // Brand
    "Ezzycon",
    "Ezzycon AI",
    "Ezzycon technology",
    "Ezzycon automation",
    "Ezzycon digital systems",

    // AI & Automation
    "AI automation agency",
    "AI automation company",
    "AI development company",
    "AI solutions company",
    "AI solutions for businesses",
    "AI consulting company",
    "AI technology company",
    "AI services company",
    "AI integration services",
    "AI implementation services",

    // Business Automation
    "business automation",
    "business process automation",
    "business automation services",
    "business process automation company",
    "workflow automation",
    "workflow automation services",
    "intelligent automation",
    "intelligent business automation",
    "automated business solutions",
    "custom business automation",
    "business process optimization",
    "digital process automation",
    "enterprise automation solutions",
    "automation solutions for businesses",

    // Generative AI
    "generative AI development",
    "generative AI solutions",
    "generative AI company",
    "GenAI development company",
    "custom generative AI solutions",
    "AI application development",
    "custom AI application development",
    "AI product development",
    "AI software development",
    "custom AI software development",

    // AI Agents & Chatbots
    "AI agent development",
    "AI agents for business",
    "AI agent development company",
    "custom AI agents",
    "AI chatbot development",
    "AI chatbot development company",
    "custom AI chatbot",
    "business AI chatbot",
    "AI customer support chatbot",
    "AI conversational chatbot",
    "WhatsApp AI chatbot",
    "WhatsApp chatbot development",
    "AI virtual assistant",
    "custom AI virtual assistant",

    // Web & Digital
    "web development agency",
    "web development company",
    "custom web development",
    "modern web development",
    "Next.js development company",
    "React development company",
    "high performance website development",
    "business website development",
    "premium website development",
    "custom website development",
    "responsive web development",
    "professional website development",

    // Digital Transformation
    "digital transformation company",
    "digital transformation services",
    "digital transformation solutions",
    "digital transformation agency",
    "digital innovation company",
    "digital solutions for businesses",
    "digital technology solutions",
    "business technology solutions",
    "technology consulting company",
    "digital strategy consulting",

    // Industry Solutions
    "AI solutions for hotels",
    "hotel automation solutions",
    "hospitality automation",
    "hospitality technology solutions",
    "AI for hospitality",
    "AI solutions for education",
    "coaching institute automation",
    "education technology solutions",
    "AI lead generation",
    "automated lead generation",

    // India
    "AI automation agency India",
    "AI automation company India",
    "AI development company India",
    "AI solutions company India",
    "AI agency India",
    "automation company India",
    "web development agency India",

    // Gwalior
    "AI automation agency Gwalior",
    "AI development company Gwalior",
    "web development company Gwalior",
  ],

  authors: [
    {
      name: "Ezzycon",
      url: siteUrl,
    },
  ],

  creator: "Ezzycon",
  publisher: "Ezzycon",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ==========================================
  // OPEN GRAPH
  // ==========================================

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ezzycon",

    title: "Ezzycon | AI Automation & Digital Systems Company",

    description:
      "We build high-performance websites, AI-powered automation, and intelligent digital systems that help businesses grow.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ezzycon — AI Automation & Digital Systems Company",
      },
    ],
  },

  // ==========================================
  // TWITTER / X
  // ==========================================

  twitter: {
    card: "summary_large_image",

    title: "Ezzycon | AI Automation & Digital Systems Company",

    description:
      "We build high-performance websites, AI-powered automation, and intelligent digital systems that help businesses grow.",

    images: ["/og-image.png"],
  },

  // ==========================================
  // FAVICON & APP ICON
  // ==========================================

  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],

    shortcut: ["/logo.png"],

    apple: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}