import "@fontsource/bebas-neue/400.css";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
        <NavbarWrapper/>
      </body>
    </html>
  );
}