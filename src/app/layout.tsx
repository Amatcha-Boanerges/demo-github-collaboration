import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luzhaven Yango Partner - Get Paid What You're Worth",
  description: "Join the leading Yango partner that always has your back. Earn up to 12,000 GHS a month with real support and tangible rewards.",
  keywords: "Yango partner, driver, Ghana, ride-sharing, earnings, support",
  openGraph: {
    title: "Luzhaven Yango Partner - Get Paid What You're Worth",
    description: "Join the leading Yango partner that always has your back. Earn up to 12,000 GHS a month with real support and tangible rewards.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
