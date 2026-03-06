import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Aqsa Afzal | Data Science Portfolio",
  description:
    "Data Science student building AI/ML solutions that matter. Passionate about deep learning, full-stack dev, and cloud deployment on AWS.",
  keywords: ["Data Science", "AI", "ML", "Next.js", "Portfolio", "Aqsa Afzal"],
  openGraph: {
    title: "Aqsa Afzal | Data Science Portfolio",
    description: "Data Science student building AI/ML solutions that matter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}