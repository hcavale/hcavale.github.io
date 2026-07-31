import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Harsheta Cavale - UX Designer',
  description: 'Senior UX Designer specializing in high-density enterprise software and industrial automation systems.',
  icons: {
    icon: '/portfolio/favicon.png',
    shortcut: '/portfolio/favicon.png',
    apple: '/portfolio/favicon.png',
  },
  openGraph: {
    title: 'Harsheta Cavale - UX Designer',
    description: 'Senior UX Designer specializing in high-density enterprise software and industrial automation systems.',
    siteName: 'Harsheta Cavale Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Harsheta Cavale - UX Designer',
    description: 'Senior UX Designer specializing in high-density enterprise software and industrial automation systems.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
