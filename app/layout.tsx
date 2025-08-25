import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "styles/globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SerenityMind – Sleep Better, Reduce Anxiety, and Find Inner Balance",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  description:
    "SerenityMind is your personalized wellness companion designed to improve sleep, reduce anxiety, and support emotional clarity through guided journaling, mindfulness, and self-discovery.",
  keywords: [
    "SerenityMind",
    "sleep app",
    "reduce anxiety",
    "emotional wellness",
    "mental clarity",
    "guided journaling",
    "mindfulness",
    "spiritual wellness",
    "calm sleep",
    "relaxation techniques",
  ],
  authors: [{ name: "SerenityMind Team" }],
  creator: "SerenityMind",
  openGraph: {
    title:
      "SerenityMind – Sleep Better, Reduce Anxiety, and Find Inner Balance",
    description:
      "Experience better sleep, less anxiety, and deeper emotional awareness with SerenityMind – your holistic wellness companion.",
    siteName: "SerenityMind",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SerenityMind – Sleep, Peace, and Emotional Clarity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        {children}
        <Toaster position="top-right" expand={false} />
      </body>
    </html>
  );
}
