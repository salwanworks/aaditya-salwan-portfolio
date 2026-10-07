import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Providers from "@/components/ui/Providers";
import "./globals.css";
import { profile, siteUrl, socialLinks } from "@/data/profile";

const title = "Aaditya Salwan | AI/ML Engineer & Software Developer";
const description =
  "Portfolio of Aaditya Salwan, a Computer Science undergraduate and DRDO intern working on AI/ML, computer vision, telemetry systems and software engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Aaditya Salwan — Portfolio",
  authors: [{ name: profile.name, url: socialLinks.linkedin }],
  keywords: [
    "Aaditya Salwan",
    "AI/ML",
    "Machine Learning",
    "Computer Vision",
    "OpenCV",
    "MediaPipe",
    "Python",
    "DRDO",
    "DEAL",
    "SNMP",
    "Software Engineer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "Aaditya Salwan",
    locale: "en_IN",
    images: [{ url: profile.photo, width: 800, height: 800, alt: profile.photoAlt }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [profile.photo],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080B12",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Computer Science undergraduate · AI/ML & Software Developer",
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  alumniOf: "Bharati Vidyapeeth University, College of Engineering, Pune",
  sameAs: [socialLinks.linkedin, socialLinks.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        style={
          {
            "--font-sans": "var(--font-geist-sans)",
            "--font-mono": "var(--font-geist-mono)",
          } as React.CSSProperties
        }
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-signal focus:px-3 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
