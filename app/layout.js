import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Uai Trampo",
  description: "Created by Rixxer Corp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
