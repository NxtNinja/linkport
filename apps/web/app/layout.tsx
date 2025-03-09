import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
