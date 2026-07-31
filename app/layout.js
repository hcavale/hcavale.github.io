import "./globals.css";

export const metadata = {
  title: 'Harsheta Cavale - UX Designer',
  description: 'Senior UX Designer specializing in high-density enterprise software and industrial automation systems.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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