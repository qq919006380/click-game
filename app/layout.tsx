import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyberpunk Click Game",
  description: "A cyberpunk-themed clicking game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-darker-bg">
        <main className="max-w-screen-md mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
