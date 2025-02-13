import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import "./globals.css";
import LayoutProvider from "@/providers/LayoutProvider";

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
 });

export const metadata: Metadata = {
  title: "MISC_FOH_QUIZ",
  description: "Weekly quiz questions for FOH staff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={raleway.className}>
        <main>
          <LayoutProvider>
            {children}
          </LayoutProvider>
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}



