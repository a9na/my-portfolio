import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ana Novkovic Portfolio",
  description: "My portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <transitionProvider>{children}</transitionProvider>
      </body>
    </html>
  );
}