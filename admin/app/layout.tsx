import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using generic font for now until installation is confirmed
import "./globals.css";
import AdminSidebar from "@/components/AdminSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velocity Admin",
  description: "Admin Panel for Velocity Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-gray-50">
          <AdminSidebar />
          <main className="flex-1 p-8 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
