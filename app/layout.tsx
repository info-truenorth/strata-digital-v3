import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strata Digital - Digital presence built for rural NZ reality",
  description: "Fast, mobile-first websites that work on rural connections. We build your complete digital ecosystem for rural New Zealand businesses.",
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
