import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { ClerkProvider } from '@clerk/nextjs'
import {shadesOfPurple} from '@clerk/themes'
const inter = Inter({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: shadesOfPurple,
      variables: {
        colorPrimary: "#3b82f6",
        colorBackground: "#1a202c",
        colorInputBackground: "#2D3748",
        colorInputText: "#F3F4F6",
      },
      elements: {
        formButtonPrimary: "text-white",
        card: "bg-gray-800",
        headerTitle: "text-blue-400",
        headerSubtitle: "text-gray-400"
      }
    }}>
      <html lang="en">
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with love by Kevin Patel</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
